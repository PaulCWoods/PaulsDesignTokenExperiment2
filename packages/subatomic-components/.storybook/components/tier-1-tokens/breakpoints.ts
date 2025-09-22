import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';
import styles from './tier-1-tokens.scss?inline';

@customElement('tier-1-breakpoints')
export class Tier1Breakpoints extends LitElement {
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
      <div class="tier-1-breakpoints" style="padding: 2rem;">
        <h1 tagName="h1" variant="headline-lg">Breakpoints</h1>
        <div>
          <p>Breakpoints token description</p>
        </div>
        <section>
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Breakpoint widths</h2>
            <p>Breakpoint widths token description</p>
          </header>
          <ul>
            <li>
              <token-specimen
                name="$ds-bp-sm"
                value="23.4375rem (375px)"
                inlineStyle="height: 4rem; background: #ddd; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100%; max-width: 23.4375rem"
              ></token-specimen>
            </li>
            <li>
              <token-specimen
                name="$ds-bp-md"
                value="48rem (768px)"
                inlineStyle="height: 4rem; background: #ddd; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100%; max-width: 48rem"
              ></token-specimen>
            </li>
            <li>
              <token-specimen
                name="$ds-bp-md"
                value="60rem (960px)"
                inlineStyle="height: 4rem; background: #ddd; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100%; max-width: 60rem"
              ></token-specimen>
            </li>
            <li>
              <token-specimen
                name="$ds-bp-xl"
                value="75rem (1200px)"
                inlineStyle="height: 4rem; background: #ddd; display: flex; align-items: center; justify-content: center; font-weight: bold; width: 100%; max-width: 75rem"
              ></token-specimen>
            </li>
          </ul>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tier-1-breakpoints': Tier1Breakpoints;
  }
}
