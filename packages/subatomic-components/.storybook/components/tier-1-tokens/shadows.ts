import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';
import styles from './tier-1-tokens.scss?inline';

interface TokenObject {
  name: string;
  value: string;
  comment: string;
}

interface ShadowProperties {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
  [key: string]: string; // Allow indexing with strings
}

interface ShadowGroups {
  [key: string]: ShadowProperties;
}

declare global {
  interface Window {
    themeTokens: string;
  }
}

@customElement('tier-1-shadows')
export class Tier1Shadows extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }
  
  static get properties() {
    return {
      tokens: { state: true }
    };
  }

  /**
   * Tokens state that loads in JSON parsed theme file
   */
  tokens?: Record<string, any>;

  /**
   * 1) Add DOM Content Loaded event to run when the theme switches
   * 2) Timeout should match the preview.ts timeout of the theme switching
   */
  connectedCallback(): void {
    super.connectedCallback();
    globalThis.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.tokens = JSON.parse(window.themeTokens) ?? {};
      }, 1);
    });
  }

  filterTokens(prefix: string): TokenObject[] {
    // Return empty array if tokens are not yet loaded
    if (!this.tokens) return [];

    // Group shadow tokens by their base name (sm, md)
    const shadowGroups: ShadowGroups = Object.entries(this.tokens)
      .filter(([name]) => name.startsWith(prefix))
      .reduce((acc: ShadowGroups, [name, value]) => {
        const baseName = name.match(/ds-shadow-([a-z]+)/)?.[0];
        if (baseName) {
          if (!acc[baseName]) {
            acc[baseName] = {
              x: '',
              y: '',
              blur: '',
              spread: '',
              color: ''
            };
          }
          const property = name.replace(`${baseName}-`, '');
          acc[baseName][property] = value;
        }
        return acc;
      }, {} as ShadowGroups);

    // Convert groups into token objects with composed shadow values
    return Object.entries(shadowGroups).map(([name, props]: [string, any]) => {
      const composedValue = `${props.x} ${props.y} ${props.blur} ${props.spread} ${props.color}`;
      return {
        name: `--${name}`,
        value: composedValue,
        comment: ''
      };
    });
  }

  render() {
    return html`
      <div class="tier-1-shadows" style="padding: 2rem;">
        <h1 tagName="h1" variant="headline-lg">Shadow</h1>
        <div>
          <p>Tier 1 Shadow tokens provide depth and elevation to UI elements through box shadows.</p>
        </div>
        <section class="ds-c-section">
          <ul>
            ${this.filterTokens('ds-shadow').map((item) => {
              return html`
                <li>
                  <token-specimen
                    name="${item.name}"
                    value="${item.value}"
                    inlineStyles="background-color: #fbfbfb; box-shadow: ${item.value};"
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
    'tier-1-shadows': Tier1Shadows;
  }
}
