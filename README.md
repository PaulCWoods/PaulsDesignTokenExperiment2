# Subatomic Design Tokens Course

![Subatomic Card](subatomic-card.png)

This repository contains both a sample design token architecture and a Storybook instance to represent and use this design token architecture for the Subatomic: A Complete Guide to Design Tokens course.

> **Note:** This repository and its contents are intended for demonstration and educational purposes as part of the Subatomic: A Complete Guide to Design Tokens course. The code, tokens, and components should not be distributed or used outside of this course without permission.

The Storybook instance and design tokens are separated out into two packages:

```
├── packages/
│   ├── subatomic-components (Storybook using the tokens)
│   ├── subatomic-design-tokens (Token infrastructure that uses Style Dictionary)
└──
```

This uses a monorepo setup to allow developers to work with the tokens and components in tandem rather than needing to build and install a new version of the tokens with every change. That's our preference since component systems and tokens tend to travel closely together even if they have different release schedules. You can create your own repo for tokens separate from the component library if you'd like.

## Tools needed

- [Node.js](https://nodejs.org/en) version 18 or higher
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Dependencies

- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
- [Storybook](https://storybook.js.org/)
- [Sass](https://sass-lang.com/)
- [Lit](https://lit.dev/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

1. Clone the repository
2. Open up your terminal and change directories into the root of this repository
3. Run `npm install` to install all of the packages needed to run and build both `subatomic-design-tokens` and `subatomic-components`
4. Run `npm start` to run Storybook to view the demo in the browser.

## Available Branches

- `main` - The main branch for the course that uses the manual approach to building the tokens. This branch builds all tiers of tokens
- `demo/export-tier-2-3-only` - This branch also uses a manual build but only exports tier 2 and tier 3 tokens to be used to restrict downstream developers from using theme-specific tokens
- `demo/ios-design-tokens-manager` - This branch uses the [Design Tokens Manager](https://www.figma.com/community/plugin/1263743870981744253/design-tokens-manager) Figma plugin to export the Figma variables to a `design-tokens` folder. A script pulls these files into the `subatomic-design-tokens` package and then Style Dictionary can build those tokens. The script pulls these files from the `Downloads/design-tokens` directory. This branch also has iOS tokens built and ready to import into Swift project. You'll need to install the Design Tokens Manager Figma plugin into Subatomic Foundations.
- `demo/ios-tokens-studio` - This branch uses the [Tokens Studio](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma) Figma plugin to export the Figma variables to a `tokens` folder. A script pulls these files into the `subatomic-design-tokens` package and then Style Dictionary can build those tokens. The script pulls these files from the `Downloads/tokens` directory. This branch also has iOS tokens built and ready to import into Swift project. You'll need to install the Tokens Studio Figma plugin into Subatomic Foundations.

## Subatomic Design Tokens

The token system lives within the `subatomic-design-tokens` package. It consists of the vanilla (neutral), strawberry, chocolate, and dark chocolate themes. In order to build all of these themes at once, you can run the following from the root of the repository:

```
npm run build:tokens
```

If you'd like to only build one theme at a time, run `npm run build:tokens:[theme-name]` where an example would be:

```
npm run build:tokens:vanilla
```

These tokens will build into the various formats within the `[theme-name]/build/[format]/` directory. For example, the CSS Custom Properties for vanilla will output in the `vanilla/build/css/tokens.css` file.

## Subatomic Components

The `subatomic-components` package contains the Storybook instance to view and use the tokens from `subatomic-design-tokens`. It is [Web Component Storybook](https://storybook.js.org/docs/get-started/frameworks/web-components-vite), but aside from the header component, the stories are written using regular ol' HTML. We've constructed it this way to create a framework-agnostic way of using tokens without subjecting anyone into using one framework or another.

### Using Themes Within Storybook

The vanilla, strawberry, chocolate, and dark chocolate themes from `subatomic-design-tokens` are already wired up to Storybook. These tokens and fonts are being pulled in within the `.storybook/themes.scss` file.

The theme switcher is using Storybook's native ([themes addon](https://storybook.js.org/addons/@storybook/addon-themes)). How it works, is you define your themes within the `.storybook/preview.ts` file with this decorator:

```ts
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
```

What this does is it adds a class name like `vanilla` to the `<html>` tag surrounding the Storybook story contents. When the theme is switched in the Storybook theme switcher, the class name changes. This is why we are building `vanilla.css` in addition to `tokens.css` within `subatomic-design-tokens`. In Storybook, we want to target the `.vanilla` class name in CSS instead of `:root` to allow for those token values to swap out based on the class name. This is not included within the distributed tokens since most downstream applications will use the `:root` selector in CSS instead of the class name to apply the tokens.

### Token visualization

In addition to the usage of tokens with components in Storybook, we've added the ability to view the tokens within code. This uses the `tokens.json` files imported into the `.storybook/preview.ts` file. We've also added a `tokens` object to switch between these files and loop through the proper tokens to display them.

```ts
import vanillaTokens from '../../subatomic-design-tokens/vanilla/build/json/tokens.json?raw';
import strawberryTokens from '../../subatomic-design-tokens/strawberry/build/json/tokens.json?raw';
import chocolateTokens from '../../subatomic-design-tokens/chocolate/build/json/tokens.json?raw';
import darkChocolateTokens from '../../subatomic-design-tokens/dark-chocolate/build/json/tokens.json?raw';

const tokens = {
  vanilla: vanillaTokens,
  strawberry: strawberryTokens,
  chocolate: chocolateTokens,
  'dark-chocolate': darkChocolateTokens
};
```

While this accomplishes the tier 2 token swap, the tier 1 tokens need to swap as well. This is why we've added this event which swaps out the proper token set and updates the tokens being looped through. That allows for `color-green` tier 1 tokens in one thing to display and then `color-red` in another thing would show up during the theme switch. These components used to visualize the tokens are located within `.storybook/components`.

```ts
// Adjust the files being display based on the theme displayed
// Takes the class from the html tag and sets the theme to that and dynamically
// imports the proper tokens to be displayed in Storybook only
window.addEventListener('DOMContentLoaded', () => {
  const themeWrapper = document.querySelector('html');
  setTimeout(() => {
    const themeName = themeWrapper.classList[0];
    globalThis.themeName = themeName;
    globalThis.themeTokens = tokens[themeName];
  }, 1);
});
```

## Publishing Subatomic Design Tokens

In order to publish the tokens to be installed into a downstream application via NPM, you'll need:

- A registered NPM account with your package.json file `name` key set to that package name
- The `subatomic-design-tokens` package built and ready to publish
- The `package.json` file within the `subatomic-design-tokens` package to be updated with the new version number

To publish the tokens, you'll need to do the following:

Update the version number in the `subatomic-design-tokens` package.json file to the new version number. We've added a script to update the minor version number for you within that package:

```
npm run update:version:minor
```

NOTE: We're not updating the `subatomic-components` package or the parent package. These don't get shipped to NPM, but you can add synchronization if you'd like.

Make sure you update the version number first. Then, to build the tokens into a `dist` folder at the root of the project:

```
npm run build
```

To publish the tokens to NPM:

```
npm run publish:tokens
```

## Support

If you have any issues with the demo, please reach out to us in Slack or email us at [courses@bradfrost.com](mailto:courses@bradfrost.com).
