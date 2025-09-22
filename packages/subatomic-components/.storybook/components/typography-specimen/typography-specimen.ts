import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './typography-specimen.scss?inline';

@customElement('typography-specimen')
export class TypographySpecimen extends LitElement {
  static get styles() {
    return unsafeCSS([styles.toString()]);
  }

  @property()
  styleModifier?: string;

  @property()
  fontFamily?: string;

  @property()
  fontWeight?: string;

  @property()
  fontSize?: string;

  @property()
  lineHeight?: string;

  @property()
  textTransform?: string;

  @property()
  letterSpacing?: string;

  @property()
  value? = 'The quick brown fox jumps over the lazy brown dog.';

  @property()
  typographyPresetName?: string;

  @property()
  description?: string;

  @property()
  inputHeight: string;

  render() {
    return html`
      <div class="typography-specimen">
        <div class="typography-specimen__header">
          <span class="typography-specimen__title">${this.typographyPresetName}</span>
          <div class="typography-specimen__description">${this.description}</div>

          <code
            >${this.fontFamily}<br />
            ${this.fontWeight}<br />
            ${this.fontSize}<br />
            ${this.lineHeight}<br />
            ${this.textTransform}<br />
            ${this.letterSpacing}</code
          >
        </div>
        <div class="typography-specimen__body">
          <div id="typography-specimen" class="${this.styleModifier}">
            <slot contenteditable=${true}></slot>
            <textarea
              @keydown=${this.onChange}
              style="height: ${this.inputHeight}"
              class="typography-specimen__input"
              .value=${this.value}
            ></textarea>
          </div>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    setTimeout(() => {
      this.inputHeight = this.shadowRoot.querySelector('.typography-specimen__input').scrollHeight + 'px';
    }, 1);
  }

  firstUpdated() {
    // Wait for next frame to ensure styles are computed
    requestAnimationFrame(() => {
      this.getStyles();
    });
  }

  connectedCallback() {
    super.connectedCallback();
    globalThis.addEventListener('resize', this.getStyles);
  }

  disconnectedCallback() {
    globalThis.removeEventListener('resize', this.getStyles);
    super.disconnectedCallback();
  }

  async getStyles() {
    const el = this.shadowRoot?.getElementById('typography-specimen');
    const styles = globalThis.getComputedStyle(el);
    this.fontFamily = 'font-family: ' + styles.fontFamily;
    this.fontSize = 'font-size: ' + styles.fontSize;
    this.fontWeight = 'font-weight: ' + styles.fontWeight;
    this.lineHeight = 'line-height: ' + styles.lineHeight;
    this.textTransform = 'text-transform: ' + styles.textTransform;
    this.letterSpacing = 'letter-spacing: ' + styles.letterSpacing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'typography-specimen': TypographySpecimen;
  }
}
