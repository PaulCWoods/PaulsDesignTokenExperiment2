import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['./components/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-themes', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  staticDirs: [
    {
      from: '../src/assets',
      to: '/assets'
    }
  ]
};
export default config;
