import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../token-specimen/token-specimen';

@customElement('tier-1-colors')
export class ColorTokens extends LitElement {
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
    const datavizTokens = this.filterTokens('ds-color-dataviz-');
    return html`
      <div class="tier-1-colors" style="padding: 2rem;">
        <h1 tagName="h1" variant="headline-lg">Color design tokens</h1>
        <div>
          <p>
            Tier 1 color tokens define all color values used by the theme. Tier 1 token values are displayed here for reference only and are not to be
            used directly by [DS Web Components]. Tier 2 token values should be used instead.
          </p>
        </div>

        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Brand colors</h2>
            <p>Brand colors define the palette specific to the brand</p>
          </header>
          <div class="ds-c-grid">
            ${this.filterTokens('ds-color-brand-').map((item) => {
              if (!item.name.includes('color-brand-gradient')) {
                return html`
                  <div class="ds-c-grid__item">
                    <token-specimen name="${item.name}" value="${item.value}" inlineStyles="background-color: var(${item.name});"></token-specimen>
                  </div>
                `;
              }
            })}
          </div>
        </section>

        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Neutral colors</h2>
            <p>Colors that come from the neutral palette</p>
          </header>
          <div class="ds-c-grid">
            ${this.filterTokens('ds-color-neutral-').map((item) => {
              return html`
                <div class="ds-c-grid__item">
                  <token-specimen name="${item.name}" value="${item.value}" inlineStyles="background-color: var(${item.name});"></token-specimen>
                </div>
              `;
            })}
          </div>
        </section>
        <section class="ds-c-section">
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Utility colors</h2>
            <p>Utility colors provide semantic meaning through color, such as success, warning, error, and informational states.</p>
          </header>
          <div class="ds-c-grid">
            ${this.filterTokens('ds-color-utility-').map(
              (item) => html`
                <div class="ds-c-grid__item">
                  <token-specimen name="${item.name}" value="${item.value}" inlineStyles="background-color: var(${item.name});"></token-specimen>
                </div>
              `
            )}
          </div>
        </section>
        ${datavizTokens.length > 0
          ? html` <section class="ds-c-section">
              <header class="ds-c-section__header">
                <h2 class="ds-c-section__heading">Dataviz colors</h2>
                <p>
                  Dataviz colors are used for data visualization elements like charts, graphs and other infographics to help distinguish between
                  different data points and series.
                </p>
              </header>
              <div class="ds-c-grid">
                ${datavizTokens.map(
                  (item) => html`
                    <div class="ds-c-grid__item">
                      <token-specimen name="${item.name}" value="${item.value}" inlineStyles="background-color: var(${item.name});"></token-specimen>
                    </div>
                  `
                )}
              </div>
            </section>`
          : ''}
        <section>
          <header class="ds-c-section__header">
            <h2 class="ds-c-section__heading">Transparent colors</h2>
            <p>
              Transparent colors define translucent colors that are often used for dimming backgrounds in order to direct focus (e.g. a modal
              backdrop)
            </p>
          </header>
          <div class="ds-c-grid">
            ${this.filterTokens('ds-color-transparent-').map(
              (item) => html`
                <div class="ds-c-grid__item">
                  <token-specimen name="${item.name}" value="${item.value}" inlineStyles="background-color: var(${item.name});"></token-specimen>
                </div>
              `
            )}
          </div>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tier-1-colors': ColorTokens;
  }
}
