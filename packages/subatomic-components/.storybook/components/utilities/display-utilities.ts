import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './utilities.scss?inline';

@customElement('display-utilities')
export class DisplayUtilities extends LitElement {
  static get styles() {
    return unsafeCSS([styles.toString()]);
  }

  render() {
    return html`
      <div class="sg-utility-demo">
        <h2>
          <code>Display utilties</code>
        </h2>
        <code>ds-u-display-flex</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-display-flex sg-demo-box-2">
            <div class="fpo">Forces</div>
            <div class="fpo">display flex</div>
          </div>
        </div>

        <code>ds-u-display-block</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-display-block sg-demo-box-2">
            <div class="fpo">Forces</div>
            <div class="fpo">display flex</div>
          </div>
        </div>

        <hr />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'display-utilities': DisplayUtilities;
  }
}
