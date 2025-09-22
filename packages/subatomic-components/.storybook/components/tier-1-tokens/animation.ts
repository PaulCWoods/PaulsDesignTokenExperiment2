import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';
import styles from './tier-1-tokens.scss?inline';

@customElement('tier-1-animation')
export class Tier1Animation extends LitElement {
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
      <div class="tier-1-animation" style="padding: 2rem;">
        <h1 class="ds-c-section__heading">Animation</h1>
        <div class="ds-c-text-passage">
          <p>Animation token description</p>
        </div>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Animation Duration</h2>
            <p>Animation token description</p>
          </header>
          <ul>
            ${this.filterTokens('ds-animation-duration').map((item) => {
              return html`
                <li>
                  <token-specimen
                    variant="animation-move"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyle="transition-duration: ${item.value}"
                  ></token-specimen>
                </li>
              `;
            })}
          </ul>
        </section>

        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Animation Ease</h2>
            <p>Animation token description</p>
          </header>
          <ul>
            ${this.filterTokens('ds-animation-easing').map((item) => {
              return html`
                <li>
                  <token-specimen
                    variant="animation-fade"
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyle="transition-timing-function: var(${item.name}"
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
    'tier-1-animation': Tier1Animation;
  }
}
