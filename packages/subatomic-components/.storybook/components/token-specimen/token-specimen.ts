import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './token-specimen.scss?inline';

@customElement('token-specimen')
export class TokenSpecimen extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  @property()
  styleModifier?: string;

  @property()
  comment?: string;

  @property()
  value?: string;

  @property()
  name?: string;

  @property()
  inlineStyles?: string;

  @property()
  behavior?: string;

  @property()
  description?: string;

  @property()
  variant?: string;

  @property()
  specimenClassName?: string;

  render() {
    const componentClassName = classMap({
      'token-specimen': true,
      [`${this.styleModifier}`]: !!this.styleModifier,
      'token-specimen--stacked': this.behavior == 'stacked',
      'token-specimen--inverted': this.name?.includes('knockout')
    });

    let sample;

    if (this.variant == 'typography-title') {
      sample = html`<div
        class=${'token-specimen__sample token-specimen__sample--typography-title ' + this.specimenClassName}
        style=${this.inlineStyles}
        contenteditable
      >
        AaBbCcDdEeFfGg
      </div>`;
    } else if (this.variant == 'typography-body') {
      sample = html`<div
        class=${'token-specimen__sample token-specimen__sample--typography-body ' + this.specimenClassName}
        style=${this.inlineStyles}
        contenteditable
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>`;
    } else if (this.variant == 'animation-fade') {
      sample = html`<div
        class=${'token-specimen__sample token-specimen__sample--box token-specimen__sample--animation-fade ' + this.specimenClassName}
        style=${this.inlineStyles}
      ></div>`;
    } else if (this.variant == 'animation-move') {
      sample = html`<div
        class=${'token-specimen__sample token-specimen__sample--box token-specimen__sample--animation-move ' + this.specimenClassName}
        style=${this.inlineStyles}
      ></div>`;
    } else {
      sample = html`<div class=${'token-specimen__sample token-specimen__sample--box ' + this.specimenClassName} style=${this.inlineStyles}>
        <slot></slot>
      </div>`;
    }

    return html`
      <div class=${componentClassName}>
        <div class="token-specimen__info">
          <code class="token-specimen__name">${this.name}</code>
          <code class="token-specimen__value">${this.value}</code>
          <p class="token-specimen__comment">${this.comment}</p>
        </div>
        <div class="token-specimen__body">${sample}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'token-specimen': TokenSpecimen;
  }
}
