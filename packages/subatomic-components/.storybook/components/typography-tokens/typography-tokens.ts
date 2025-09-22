import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';
import styles from './typography-tokens.scss?inline';

@customElement('typography-tokens')
export class TypographyTokens extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Tokens state that loads in JSON parsed theme file
   */
  @state() tokens: any;

  /**
   * 1) Add DOM Content Loaded event to run when the theme switches
   * 2) Timeout should match the preview.ts timeout of the theme switching
   */
  connectedCallback(): void {
    super.connectedCallback();
    globalThis.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.tokens = JSON.parse(window['themeTokens']) ?? {};
      }, 1);
    });
  }

  filterTokens(prefix) {
    // Return empty array if tokens are not yet loaded
    if (!this.tokens) return [];
    return Object.entries(this.tokens)
      .filter(([name]) => name.startsWith(prefix))
      .map(([name, { value, comment }]) => ({
        name: `--${name}`,
        value,
        comment
      }));
  }

  render() {
    return html`
      <div class="typography-tokens" style="padding: 2rem;">
        <h1 tagName="h1" variant="headline-lg">Typography Design Tokens</h1>
        <div styleModifier="ds-u-margin-bottom-md">
          <p>
            These token values are the raw materials that make up the
            <a href="?path=/story/atoms-design-tokens-typography--presets">typography presets</a>. They are displayed here only for reference and are
            never used directly.
          </p>
        </div>
        <section>
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Font family</h2>
            <p>The font families used by the theme's typography presets</p>
          </header>
          <ul>
            ${this.filterTokens('ds-typography-font-family-').map(
              (item) => html`
                <li>
                  <token-specimen
                    variant="typography-title"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="font-family: var(${item.name})"
                  ></token-specimen>
                </li>
              `
            )}
          </ul>
        </section>
        <section>
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Font weight</h2>
            <p>The font weights used by the theme's typography presets</p>
          </header>
          <ul>
            ${this.filterTokens('ds-typography-font-weight-').map(
              (item) => html`
                <li>
                  <token-specimen
                    variant="typography-title"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="font-weight: var(${item.name})"
                  ></token-specimen>
                </li>
              `
            )}
          </ul>
        </section>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Font size</h2>
            <p>The font sizes used by the theme's typography presets</p>
          </header>
          <ul>
            ${this.filterTokens('ds-typography-font-size-').map(
              (item) => html`
                <li>
                  <token-specimen
                    variant="typography-title"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="font-size: var(${item.name})"
                  ></token-specimen>
                </li>
              `
            )}
          </ul>
        </section>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Line height</h2>
            <p>The line height values used by the theme's typography presets</p>
          </header>
          <ul>
            ${this.filterTokens('ds-typography-line-height-').map(
              (item) => html`
                <li>
                  <token-specimen
                    variant="typography-title"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="line-height: var(${item.name})"
                  ></token-specimen>
                </li>
              `
            )}
          </ul>
        </section>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Line height</h2>
            <p>The line height values used by the theme's typography presets</p>
          </header>
          <ul>
            ${this.filterTokens('ds-typography-line-height-').map(
              (item) => html`
                <li>
                  <token-specimen
                    variant="typography-title"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="line-height: var(${item.name})"
                  ></token-specimen>
                </li>
              `
            )}
          </ul>
        </section>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Letter spacing</h2>
            <p>The letter spacing values used by the theme's typography presets</p>
          </header>
          <ul>
            ${this.filterTokens('ds-typography-letter-spacing-').map(
              (item) => html`
                <li>
                  <token-specimen
                    variant="typography-title"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="letter-spacing: var(${item.name})"
                  ></token-specimen>
                </li>
              `
            )}
          </ul>
        </section>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Text transform</h2>
            <p>The text transform values used by the theme's typography presets</p>
          </header>
          <ul>
            ${this.filterTokens('ds-typography-text-transform-').map(
              (item) => html`
                <li>
                  <token-specimen
                    variant="typography-title"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="text-transform: var(${item.name})"
                  ></token-specimen>
                </li>
              `
            )}
          </ul>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'typography-tokens': TypographyTokens;
  }
}
