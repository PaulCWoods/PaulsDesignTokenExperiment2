import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from '@storybook/web-components-vite';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['./components/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs")
  ],
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {}
  },
  viteFinal: async (config) => {
    // Ensure JSON files can be imported as raw strings
    config.assetsInclude = config.assetsInclude || [];
    if (Array.isArray(config.assetsInclude)) {
      config.assetsInclude.push('**/*.json');
    }
    return config;
  },
  staticDirs: [
    {
      from: '../src/assets',
      to: '/assets'
    }
  ]
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
