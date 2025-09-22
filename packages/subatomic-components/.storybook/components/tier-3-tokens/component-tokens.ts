import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';
import styles from './tier-3-tokens.scss?inline';

@customElement('component-tokens')
export class ComponentTokens extends LitElement {
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
    this.tokens;
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
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Button Tokens</h2>
          </header>
          <div class="ds-c-grid">
            <div class="ds-c-grid__item">
              <h3>Button Background Color</h3>
              <div class="ds-c-grid" variant="1-3up">
                ${this.filterTokens('ds-theme-button-color-background').map((item) => {
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
            <div class="ds-c-grid__item">
              <h3>Button Border Color</h3>
              <div class="ds-c-grid" variant="1-3up">
                ${this.filterTokens('ds-theme-button-color-border').map((item) => {
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
            <div class="ds-c-grid__item">
              <h3>Button Content Color</h3>
              <div class="ds-c-grid" variant="2up">
                ${this.filterTokens('ds-theme-button-color-content').map((item) => {
                  return html`
                    <div class="ds-c-grid__item">
                      <token-specimen
                        behavior="stacked"
                        name=${item.name}
                        value=${item.value}
                        variant="typography-title"
                        inlineStyles="color: var(${item.name});"
                      ></token-specimen>
                    </div>
                  `;
                })}
              </div>
            </div>
            <div class="ds-c-grid__item">
              <h3>Button Primary Background Color</h3>
              <div class="ds-c-grid" variant="1-3up">
                ${this.filterTokens('ds-theme-button-primary-color-background').map((item) => {
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
            <div class="ds-c-grid__item">
              <h3>Button Primary Border Color</h3>
              <div class="ds-c-grid" variant="1-3up">
                ${this.filterTokens('ds-theme-button-primary-color-border').map((item) => {
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
            <div class="ds-c-grid__item">
              <h3>Button Primary Content Color</h3>
              <div class="ds-c-grid" variant="2up">
                ${this.filterTokens('ds-theme-button-primary-color-content').map((item) => {
                  return html`
                    <div class="ds-c-grid__item">
                      <token-specimen
                        behavior="stacked"
                        name=${item.name}
                        value=${item.value}
                        variant="typography-title"
                        inlineStyles="color: var(${item.name});"
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
            <h2 class="ds-c-section__heading">Form Tokens</h2>
          </header>
          <div class="ds-c-grid">
            <div class="ds-c-grid__item">
              <h3>Form Border Colors</h3>
              <div class="ds-c-grid" variant="1-3up">
                ${this.filterTokens(`ds-theme-form-color-border`).map((item) => {
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
            <div class="ds-c-grid__item">
              <h3>Form Background Colors</h3>
              <div class="ds-c-grid" variant="1-3up">
                ${this.filterTokens('ds-theme-form-color-background').map((item) => {
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
            <h2 class="ds-c-section__heading">Focus Ring Tokens</h2>
          </header>
          <div class="ds-c-grid">
            <div class="ds-c-grid__item">
              <div class="ds-c-grid" variant="1-3up">
                ${this.filterTokens(`ds-theme-focus-ring-color`).map((item) => {
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
        </section>
      </section>
      <section class="ds-c-section">
        <header class="ds-c-section__header">
          <h2 class="ds-c-section__heading">Link Tokens</h2>
        </header>
        <div class="ds-c-grid">
          <div class="ds-c-grid__item">
            <h3>Link Content Color</h3>
            <div class="ds-c-grid" variant="2up">
              ${this.filterTokens('ds-theme-link-color-content').map((item) => {
                return html`
                  <div class="ds-c-grid__item">
                    <token-specimen
                      behavior="stacked"
                      name=${item.name}
                      value=${item.value}
                      variant="typography-title"
                      inlineStyles="color: var(${item.name});"
                    ></token-specimen>
                  </div>
                `;
              })}
            </div>
          </div>
          <div class="ds-c-grid__item">
            <h3>Link Knockout Content Color</h3>
            <div class="ds-c-grid" variant="2up">
              ${this.filterTokens('ds-theme-link-knockout-color-content').map((item) => {
                return html`
                  <div class="ds-c-grid__item">
                    <token-specimen
                      behavior="stacked"
                      name=${item.name}
                      value=${item.value}
                      variant="typography-title"
                      inlineStyles="color: var(${item.name});"
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
    'component-tokens': ComponentTokens;
  }
}
