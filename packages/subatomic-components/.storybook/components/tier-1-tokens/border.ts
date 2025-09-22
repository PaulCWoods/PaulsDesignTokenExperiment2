import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '../token-specimen/token-specimen';
import styles from './tier-1-tokens.scss?inline';

@customElement('tier-1-border')
export class Tier1Border extends LitElement {
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
    return html`
      <div class="tier-1-border" style="padding: 2rem;">
        <h1>Border</h1>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Border width</h2>
            <p>Tier 1 Border width tokens define the border width options available.</p>
          </header>
          <ul>
            ${this.filterTokens('ds-border-width').map((item) => {
              return html`
                <li>
                  <token-specimen
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="background-color: transparent; border-width: var(${item.name}); border-style: solid; border-color: var(--ds-theme-color-border-brand);"
                  ></token-specimen>
                </li>
              `;
            })}
          </ul>
        </section>

        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Border radius</h2>
            <p>Tier 1 Border width tokens define the border radius options available.</p>
          </header>
          <ul>
            ${this.filterTokens('ds-border-radius').map((item) => {
              return html`
                <li>
                  <token-specimen
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="
                      background-color: 'transparent';
                      border-width: '2px';
                      border-style: 'solid';
                      border-color: 'black';
                      border-radius: var(${item.name});"
                  ></token-specimen>
                </li>
              `;
            })}
          </ul>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tier-1-border': Tier1Border;
  }
}
