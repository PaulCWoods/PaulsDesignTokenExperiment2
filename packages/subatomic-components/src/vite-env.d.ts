/// <reference types="vite/client" />

declare module "*.scss" {
  const content: string;
  export default content;
}

declare module "*.scss?inline" {
  const content: string;
  export default content;
}

declare module "*.json?raw" {
  const content: string;
  export default content;
}

declare global {
  interface Window {
    themeTokens: string;
    themeName: string;
  }
  
  var themeName: string;
  var themeTokens: string;
}