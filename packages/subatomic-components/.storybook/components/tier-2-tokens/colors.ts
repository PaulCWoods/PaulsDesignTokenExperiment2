import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';
import styles from './tier-2-tokens.scss?inline';

@customElement('tier-2-colors')
export class Tier2Colors extends LitElement {
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
    if (!this.tokens) return [];
    const filtered = Object.entries(this.tokens)
      .filter(([name]) => name.startsWith(prefix))
      .map(([name, value]) => {
        return {
          name: `--${name}`,
          value: value,
          comment: ''
        };
      });
    return filtered;
  }

  render() {
    return html`<section class="ds-c-section">
        <header class="ds-c-section__header">
          <h2 class="ds-c-section__heading">Background Colors</h2>
        </header>
        <div class="ds-c-grid">
          <div class="ds-c-grid__item">
            <div class="ds-c-grid" variant="1-3up">
              ${this.filterTokens('ds-theme-color-background').map((item) => {
                return html`
                  <div class="ds-c-grid__item">
                    <token-specimen
                      behavior="stacked"
                      name=${item.name}
                      value=${item.value}
                      inlineStyles="background-color: var(${item.name});"
                    ></token-specimen>
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
      </section>

      <section class="ds-c-section">
        <header class="ds-c-section__header">
          <h2 class="ds-c-section__heading">Content Colors</h2>
        </header>
        <div class="ds-c-grid">
          <div class="ds-c-grid__item">
            <div class="ds-c-grid" variant="2up">
              ${this.filterTokens(`ds-theme-color-content`).map((item) => {
                return html`
                  <div class="ds-c-grid__item">
                    <token-specimen
                      behavior="stacked"
                      name=${item.name}
                      value=${item.value}
                      variant="typography-title"
                      inlineStyles="color: var(${item.name})"
                    ></token-specimen>
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
      </section>

      <section class="ds-c-section">
        <header class="ds-c-section__header">
          <h2 class="ds-c-section__heading">Border Colors</h2>
        </header>
        <div class="ds-c-grid">
          <div class="ds-c-grid__item">
            <div class="ds-c-grid" variant="1-3up">
              ${this.filterTokens(`ds-theme-color-border`).map((item) => {
                return html`
                  <div class="ds-c-grid__item">
                    <token-specimen
                      behavior="stacked"
                      name=${item.name}
                      value=${item.value}
                      inlineStyles="
                          background-color: transparent;
                          border-width: 4px;
                          border-style: solid;
                          border-color: var(${item.name});"
                    ></token-specimen>
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
      </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tier-2-colors': Tier2Colors;
  }
}
