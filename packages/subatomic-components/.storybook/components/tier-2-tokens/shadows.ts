import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';
import styles from './tier-2-tokens.scss?inline';

@customElement('tier-2-shadows')
export class Tier2Shadows extends LitElement {
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
      <div class="tier-2-shadows" style="padding: 2rem;">
        <h1 tagName="h1" variant="headline-lg">Shadow</h1>
        <div>
          <p>Shadow tokens provide depth and elevation to UI elements through box shadows.</p>
        </div>
        <section class="ds-c-section">
          <ul>
            ${this.filterTokens('ds-theme-box-shadow').map((item) => {
              return html`
                <li>
                  <token-specimen
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="background-color: #fbfbfb; box-shadow: var(${item.name});"
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
    'tier-2-shadows': Tier2Shadows;
  }
}
