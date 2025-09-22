import StyleDictionary from 'style-dictionary';
import minimist from 'minimist';

/**
 * Define available themes
 */
const AVAILABLE_THEMES = ['vanilla', 'strawberry', 'chocolate', 'dark-chocolate'];

/**
 * Look for args passed on the command line
 */
const args = minimist(process.argv.slice(2));

/**
 * If no theme arg was passed, build all themes
 */
const theme = args.theme;

/**
 * Helper function to check if token is from tier-2 or tier-3
 */
const isHigherTierToken = (filePath) => {
  const isHigherTier = filePath.includes('tier-2-usage') || filePath.includes('tier-3-components');
  return isHigherTier;
};

/**
 * Transform shadow tokens
 * 1) Add combined value to themeTokens
 */
const transformShadowTokens = (dictionary, size, themeTokens) => {
  const shadowProps = dictionary.allTokens.filter((p) => isHigherTierToken(p.filePath) && p.path[0] === 'box-shadow' && p.path[1] === size);

  const x = shadowProps.find((p) => p.path[2] === 'x')?.value || '0px';
  const y = shadowProps.find((p) => p.path[2] === 'y')?.value || '0px';
  const blur = shadowProps.find((p) => p.path[2] === 'blur')?.value || '0px';
  const spread = shadowProps.find((p) => p.path[2] === 'spread')?.value || '0px';
  const color = shadowProps.find((p) => p.path[2] === 'color')?.value || 'transparent';

  /* 1 */
  themeTokens.push(`  --ds-theme-box-shadow-${size}: ${x} ${y} ${blur} ${spread} ${color};`);
};

/**
 * Transform line height
 * 1) Transform the line height to a unitless value by dividing the line height by the font size
 */
const transformLineHeight = (dictionary, prop, themeTokens) => {
  const cleanPath = prop.path
    .map((segment) => (segment.startsWith('@') ? segment.substring(1) : segment))
    .filter((segment) => segment !== '')
    .join('-');

  /* 1 */
  const fontSizePath = [...prop.path.slice(0, -1), 'font-size'];
  const fontSizeProp = dictionary.allTokens.find((p) => p.path.join('.') === fontSizePath.join('.'));

  if (fontSizeProp) {
    const lineHeightPx = parseFloat(prop.value.replace('rem', '')) * 16;
    const fontSizePx = parseFloat(fontSizeProp.value.replace('rem', '')) * 16;
    const unitlessValue = (lineHeightPx / fontSizePx).toFixed(2);
    themeTokens.push(`  --ds-theme-${cleanPath}: ${unitlessValue};`);
  } else {
    themeTokens.push(`  --ds-theme-${cleanPath}: ${prop.value};`);
  }
};

/**
 * Format the variables
 * 1) Used for the inner contents of the :root and .theme CSS custom property rulesets
 */
const formatVariables = (dictionary, includeTier1 = false) => {
  const processedShadows = new Set();
  const themeTokens = [];

  /**
   * Get all unique shadow sizes from the dictionary
   */
  const shadowSizes = new Set(
    dictionary.allTokens
      .filter((p) => (includeTier1 || isHigherTierToken(p.filePath)) && p.path[0] === 'box-shadow' && p.path.length > 2)
      .map((p) => p.path[1])
  );

  /**
   * Iterate over all tokens
   * 1) Include z-index from core, tier 1 (if flag enabled), or tier 2/3 tokens
   * 2) Handle shadow combinations
   * 3) Handle line heights in theme typography
   * 4) Handle z-index without theme prefix
   * 5) Handle all other properties
   */
  dictionary.allTokens.forEach((prop) => {
    /* 1 */
    if (prop.path[0] === 'z-index' || includeTier1 || isHigherTierToken(prop.filePath)) {
      /* 2 */
      if (prop.path[0] === 'box-shadow' && shadowSizes.has(prop.path[1])) {
        const size = prop.path[1];
        if (processedShadows.has(size)) return;
        processedShadows.add(size);
        transformShadowTokens(dictionary, size, themeTokens);
      } else if (prop.path[0] === 'typography' && prop.path.includes('line-height')) {
        /* 3 */
        transformLineHeight(dictionary, prop, themeTokens);
      } else if (prop.path[0] === 'z-index') {
        /* 4 */
        const cleanPath = prop.path
          .map((segment) => (segment.startsWith('@') ? segment.substring(1) : segment))
          .filter((segment) => segment !== '')
          .join('-');
        themeTokens.push(`  --ds-${cleanPath}: ${prop.value};`);
      } else if (!prop.path.includes('box-shadow') || prop.path.length > 3) {
        /* 5 */
        const cleanPath = prop.path
          .map((segment) => (segment.startsWith('@') ? segment.substring(1) : segment))
          .filter((segment) => segment !== '')
          .join('-');
        // Only add theme prefix for higher tier tokens
        const prefix = isHigherTierToken(prop.filePath) ? 'theme-' : '';
        themeTokens.push(`  --ds-${prefix}${cleanPath}: ${prop.value};`);
      }
    }
  });

  return [...new Set(themeTokens)].join('\n');
};

/**
 * Transform shadow tokens for JSON format
 * Combines individual shadow properties into a single value
 */
const transformShadowTokensJSON = (dictionary, size) => {
  const shadowProps = dictionary.allTokens.filter((p) => isHigherTierToken(p.filePath) && p.path[0] === 'box-shadow' && p.path[1] === size);

  const x = shadowProps.find((p) => p.path[2] === 'x')?.value || '0px';
  const y = shadowProps.find((p) => p.path[2] === 'y')?.value || '0px';
  const blur = shadowProps.find((p) => p.path[2] === 'blur')?.value || '0px';
  const spread = shadowProps.find((p) => p.path[2] === 'spread')?.value || '0px';
  const color = shadowProps.find((p) => p.path[2] === 'color')?.value || 'transparent';

  return `${x} ${y} ${blur} ${spread} ${color}`;
};

/**
 * Generate a Theme-Specific Config
 * This accepts a theme parameter, which is used to control which set of
 * tokens to compile, and to define theme-specific compiled output.
 * @param {string} theme
 */
const getStyleDictionaryConfig = (theme) => {
  /**
   * Register the JSON formatter
   */
  StyleDictionary.registerFormat({
    name: 'json/flat/custom',
    format: function (dictionary) {
      const transformedTokens = {};

      /**
       * Get all box-shadow values from tier 2/3
       * 1) Used to determine which box-shadow values to transform into a single box-shadow-sm, box-shadow-md, etc.
       */
      const shadowSizes = new Set(
        dictionary.allTokens.filter((p) => isHigherTierToken(p.filePath) && p.path[0] === 'box-shadow' && p.path.length > 2).map((p) => p.path[1])
      );

      // Process regular tokens
      dictionary.allTokens.forEach((token) => {
        // Skip individual shadow components but keep other tokens
        if (token.path[0] === 'box-shadow' && token.path.length > 2) return;
        const prefix = isHigherTierToken(token.filePath) ? 'ds-theme-' : 'ds-';
        transformedTokens[`${prefix}${token.path.join('-')}`] = token.value;
      });

      // Process shadow tokens
      shadowSizes.forEach((size) => {
        const shadowValue = transformShadowTokensJSON(dictionary, size);
        if (shadowValue !== '0px 0px 0px 0px transparent') {
          transformedTokens[`ds-theme-box-shadow-${size}`] = shadowValue;
        }
      });

      return JSON.stringify(transformedTokens, null, 2);
    }
  });

  /**
   * Register the CSS formatter for .[theme-name] ruleset for Storybook only or if you want to use class name to define tokens
   */
  StyleDictionary.registerFormat({
    name: 'css/variables-themed',
    format: function (dictionary) {
      return `.${theme} {\n${formatVariables(dictionary, true)}\n}\n`;
    }
  });

  /**
   * Register the base font size to convert px to rem
   */
  const BASE_FONT_SIZE = 16; // Typically 16px = 1rem

  /**
   * Register the transform to convert px to rem
   * 1) Match only properties with px values
   * 2) Transform the value to rem
   */
  StyleDictionary.registerTransform({
    name: 'size/px-to-rem',
    type: 'value',
    matcher: function (prop) {
      /* 1 */
      return prop && prop.value && typeof prop.value === 'string' && prop.value.endsWith('px');
    },
    transform: function (prop) {
      if (!prop || !prop.value) return prop.value;
      const pxValue = prop.value.trim();
      /* 2 */
      if (!pxValue.endsWith('px')) return prop.value;

      const pixels = parseFloat(pxValue);
      if (isNaN(pixels)) return prop.value;

      const remValue = Number((pixels / BASE_FONT_SIZE).toFixed(4)).toString();
      return `${remValue}rem`;
    }
  });

  /**
   * Register the CSS formatter for :root ruleset
   */
  StyleDictionary.registerFormat({
    name: 'css/custom-variables',
    format: function (dictionary) {
      return `:root {\n${formatVariables(dictionary)}\n}`;
    }
  });

  /**
   * Modify the JS transform group to include a custom name transform
   * 1) Transform the token name to include a theme prefix in addition to global prefix
   */
  StyleDictionary.registerTransform({
    name: 'name/theme-prefix',
    type: 'name',
    transform: function (token) {
      const cleanPath = token.path
        .map((segment) => (segment.startsWith('@') ? segment.substring(1) : segment))
        .filter((segment) => segment !== '')
        .join('-');

      if (isHigherTierToken(token.filePath)) {
        return `DsTheme${cleanPath
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')}`;
      }
      return `Ds${cleanPath
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')}`;
    }
  });

  /**
   * Register transform group registration for CSS
   */
  StyleDictionary.registerTransformGroup({
    name: 'custom/css',
    transforms: ['attribute/cti', 'name/kebab', 'size/px-to-rem']
  });

  /**
   * Register transform group registration for JS
   */
  StyleDictionary.registerTransformGroup({
    name: 'custom/js',
    transforms: ['attribute/cti', 'name/theme-prefix', 'size/px-to-rem']
  });

  /**
   * Define the config for what platforms and formats the tokens should build in
   */
  const config = {
    source: [`./core/**/*.json`, `./${theme}/**/*.json`],
    log: {
      // Set the log level to show errors, warnings, and info messages
      verbosity: 'verbose'
    },
    platforms: {
      ts: {
        transformGroup: 'custom/js',
        prefix: 'Ds',
        buildPath: './',
        filter: {
          attributes: {
            category: 'theme'
          }
        },
        files: [
          {
            destination: `./${theme}/build/js/tokens.js`,
            format: 'javascript/es6'
          },
          {
            destination: `./${theme}/build/js/tokens.d.ts`,
            format: 'typescript/es6-declarations'
          }
        ]
      },
      css: {
        transformGroup: 'custom/css',
        prefix: 'ds',
        buildPath: './',
        filter: {
          attributes: {
            category: 'theme'
          }
        },
        files: [
          {
            destination: `./${theme}/build/css/tokens.css`,
            format: 'css/custom-variables'
          },
          {
            destination: `./${theme}/build/css/${theme}.css`,
            format: 'css/variables-themed'
          }
        ]
      },
      json: {
        transformGroup: 'custom/css',
        prefix: 'ds',
        buildPath: './',
        filter: {
          attributes: {
            category: 'theme'
          }
        },
        files: [
          {
            destination: `./${theme}/build/json/tokens.json`,
            format: 'json/flat/custom'
          }
        ]
      }
    }
  };

  return config;
};

/**
 * Build all themes or a single theme
 * 1) If no theme arg was passed in CLI, build all themes
 * 2) Otherwise, build a single theme
 */
if (!theme) {
  console.log('🚧 No theme specified, building all themes...');
  AVAILABLE_THEMES.forEach((themeName) => {
    console.log(`\n🏗️ Building ${themeName.toUpperCase()} theme`);
    const themeConfig = getStyleDictionaryConfig(themeName);
    const StyleDictionaryExtended = new StyleDictionary(themeConfig);
    StyleDictionaryExtended.buildAllPlatforms();
  });
} else {
  console.log(`🚧 Building ${theme.toUpperCase()} theme`);
  const config = getStyleDictionaryConfig(theme);
  const StyleDictionaryExtended = new StyleDictionary(config);
  StyleDictionaryExtended.buildAllPlatforms();
}
