import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './utilities.scss?inline';

@customElement('typography-utilities')
export class TypographyUtilities extends LitElement {
  static get styles() {
    return unsafeCSS([styles.toString()]);
  }

  render() {
    return html`
      <div class="sg-utility-demo">
        <h2>
          <code>Typography preset utilities</code>
        </h2>
        <hr />
        <code>ds-u-theme-typography-display-default</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-display-default sg-demo-box-2">Force typography to display</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-display-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-display-sm sg-demo-box-2">Force typography to display-sm</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-headline-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-headline-lg sg-demo-box-2">Force typography to headline-lg</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-headline-default</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-headline-default sg-demo-box-2">Force typography to headline</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-headline-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-headline-sm sg-demo-box-2">Force typography to headline-sm</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-title-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-title-lg sg-demo-box-2">Force typography to title-lg</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-title-default</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-title-default sg-demo-box-2">Force typography to title</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-title-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-title-sm sg-demo-box-2">Force typography to title-sm</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-label-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-label-lg sg-demo-box-2">Force typography to label-lg</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-label-default</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-label-default sg-demo-box-2">Force typography to label</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-label-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-label-sm sg-demo-box-2">Force typography to label-sm</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-body-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-body-lg sg-demo-box-2">Force typography to body-lg</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-body-default</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-body-default sg-demo-box-2">Force typography to body</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-body-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-body-sm sg-demo-box-2">Force typography to body-sm</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-meta-default</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-meta-default sg-demo-box-2">Force typography to meta</div>
        </div>
        <hr />
        <code>ds-u-theme-typography-meta-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-theme-typography-meta-sm sg-demo-box-2">Force typography to meta-sm</div>
        </div>
        <hr />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'typography-utilities': TypographyUtilities;
  }
}
