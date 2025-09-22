import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './utilities.scss?inline';

@customElement('spacing-margin-utilities')
export class SpacingMarginUtilities extends LitElement {
  static get styles() {
    return unsafeCSS([styles.toString()]);
  }

  render() {
    return html`
      <div class="sg-utility-demo">
        <h2>
          <code>margin</code>
        </h2>
        <code>ds-u-margin-none</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-none sg-demo-box-2">No margin</div>
        </div>

        <hr />

        <code>ds-u-margin-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-sm sg-demo-box-2">Margin small</div>
        </div>

        <hr />

        <code>ds-u-margin-md</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-md sg-demo-box-2">Margin medium</div>
        </div>

        <hr />

        <code>ds-u-margin-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-lg sg-demo-box-2">Margin large</div>
        </div>

        <hr />

        <code>ds-u-margin-xl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-xl sg-demo-box-2">Margin xl</div>
        </div>

        <hr />

        <code>ds-u-margin-xxl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-xxl sg-demo-box-2">Margin xxl</div>
        </div>

        <hr />

        <h2>
          <code>margin-top</code>
        </h2>

        <code>ds-u-margin-top-none</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-top-none sg-demo-box-2">Margin top none</div>
        </div>

        <hr />

        <code>ds-u-margin-top-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-top-sm sg-demo-box-2">Margin top small</div>
        </div>

        <hr />

        <code>ds-u-margin-top-md</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-top-md sg-demo-box-2">Margin top medium</div>
        </div>

        <hr />

        <code>ds-u-margin-top-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-top-lg sg-demo-box-2">Margin top large</div>
        </div>

        <hr />

        <code>ds-u-margin-top-xl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-top-xl sg-demo-box-2">Margin top xl</div>
        </div>

        <hr />

        <code>ds-u-margin-top-xxl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-top-xxl sg-demo-box-2">Margin top xxl</div>
        </div>

        <hr />

        <h2>
          <code>margin-right</code>
        </h2>

        <code>ds-u-margin-right-none</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-none sg-demo-box-2">Margin right none</div>
        </div>

        <hr />

        <code>ds-u-margin-right-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-sm sg-demo-box-2">Margin right small</div>
        </div>

        <hr />

        <code>ds-u-margin-right-md</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-md sg-demo-box-2">Margin right medium</div>
        </div>

        <hr />

        <code>ds-u-margin-right-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-lg sg-demo-box-2">Margin right large</div>
        </div>

        <hr />

        <code>ds-u-margin-right-xl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-xl sg-demo-box-2">Margin right xl</div>
        </div>

        <hr />

        <code>ds-u-margin-right-xxl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-xxl sg-demo-box-2">Margin right xxl</div>
        </div>

        <hr />

        <h2>
          <code>margin-bottom</code>
        </h2>

        <code>ds-u-margin-bottom-none</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-bottom-none sg-demo-box-2">Margin bottom none</div>
        </div>

        <hr />

        <code>ds-u-margin-bottom-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-bottom-sm sg-demo-box-2">Margin bottom small</div>
        </div>

        <hr />

        <code>ds-u-margin-bottom-md</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-bottom-md sg-demo-box-2">Margin bottom medium</div>
        </div>

        <hr />

        <code>ds-u-margin-bottom-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-bottom-lg sg-demo-box-2">Margin bottom large</div>
        </div>

        <hr />

        <code>ds-u-margin-bottom-xl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-bottom-xl sg-demo-box-2">Margin bottom xl</div>
        </div>

        <hr />

        <code>ds-u-margin-bottom-xxl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-bottom-xxl sg-demo-box-2">Margin bottom xxl</div>
        </div>

        <hr />

        <h2>
          <code>margin-left</code>
        </h2>

        <code>ds-u-margin-left-none</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-left-none sg-demo-box-2">Margin left none</div>
        </div>

        <hr />

        <code>ds-u-margin-left-sm</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-left-sm sg-demo-box-2">Margin left small</div>
        </div>

        <hr />

        <code>ds-u-margin-left-md</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-left-md sg-demo-box-2">Margin left medium</div>
        </div>

        <hr />

        <code>ds-u-margin-left-lg</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-left-lg sg-demo-box-2">Margin left large</div>
        </div>
        <hr />

        <code>ds-u-margin-right-xl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-xl sg-demo-box-2">Margin right xl</div>
        </div>

        <hr />

        <code>ds-u-margin-right-xxl</code>
        <div class="sg-demo-container-box">
          <div class="ds-u-margin-right-xxl sg-demo-box-2">Margin right xxl</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'spacing-margin-utilities': SpacingMarginUtilities;
  }
}
