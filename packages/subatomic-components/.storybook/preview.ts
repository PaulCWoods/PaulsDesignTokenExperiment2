import type { Preview } from '@storybook/web-components';
import { withThemeByClassName } from '@storybook/addon-themes';
import vanillaTokens from '../../subatomic-design-tokens/vanilla/build/json/tokens.json?raw';
import strawberryTokens from '../../subatomic-design-tokens/strawberry/build/json/tokens.json?raw';
import chocolateTokens from '../../subatomic-design-tokens/chocolate/build/json/tokens.json?raw';
import darkChocolateTokens from '../../subatomic-design-tokens/dark-chocolate/build/json/tokens.json?raw';
import './themes.scss';
import '../../subatomic-design-tokens/core/scss/head.scss';
import '../../subatomic-components/src/styles/components.scss';

/**
 * Used to pass the tokens.json downstream to display tokens correctly
 * 1) The token stories loop through these JSON files and need to update when the theme is switched
 */
const tokens = {
  vanilla: vanillaTokens,
  strawberry: strawberryTokens,
  chocolate: chocolateTokens,
  'dark-chocolate': darkChocolateTokens
};

/**
 * Updates the theme of the storybook using @storybook/addon-themes
 * 1) Add your new theme here in order to have it show up in the dropdown
 */
export const decorators = [
  withThemeByClassName({
    themes: {
      vanilla: 'vanilla',
      strawberry: 'strawberry',
      chocolate: 'chocolate',
      ['dark-chocolate']: 'dark-chocolate'
    },
    defaultTheme: 'vanilla'
  })
];

/** Adjust the files being display based on the theme displayed
 * Takes the class from the html tag and sets the theme to that and dynamically
 * imports the proper tokens to be displayed in Storybook only
 */
window.addEventListener('DOMContentLoaded', () => {
  const themeWrapper = document.querySelector('html');
  setTimeout(() => {
    const themeName = themeWrapper.classList[0];
    globalThis.themeName = themeName;
    globalThis.themeTokens = tokens[themeName];
  }, 1);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  storySort: {
    order: ['Atoms', 'Components', 'Pages', '*']
  }
};

export default preview;
