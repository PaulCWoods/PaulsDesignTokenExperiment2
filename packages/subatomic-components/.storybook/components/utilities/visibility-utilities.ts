import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './utilities.scss?inline';

@customElement('visibility-utilities')
export class VisibilityUtilities extends LitElement {
  static get styles() {
    return unsafeCSS([styles.toString()]);
  }

  render() {
    return html`
      <div class="sg-utility-demo">
        <h2>
          <code>Hide/Visually Hide Utilities</code>
        </h2>
        <code>ds-u-is-vishidden</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is visually hidden but still allows screenreaders to read this for accessibility.</p>
          </div>
          <div class="ds-u-is-vishidden sg-demo-box-2">
            <div class="fpo">Visibly hidden FPO block</div>
          </div>
        </div>
        <hr />
        <code>ds-u-is-hidden</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden from both visual users and screenreaders</p>
          </div>
          <div class="ds-u-is-hidden sg-demo-box-2">
            <div class="fpo">Hidden FPO block</div>
          </div>
        </div>
        <hr />
        <code>ds-u-hide-sm</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden above sm breakpoint</p>
          </div>
          <div class="ds-u-hide-sm sg-demo-box-2">
            <div class="fpo">Hidden FPO block above sm breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-hide-sm-2</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden above sm-2 breakpoint</p>
          </div>
          <div class="ds-u-hide-sm-2 sg-demo-box-2">
            <div class="fpo">Hidden FPO block above sm-2 breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-hide-md</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden above md breakpoint</p>
          </div>
          <div class="ds-u-hide-md sg-demo-box-2">
            <div class="fpo">Hidden FPO block above md breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-hide-lg</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden above lg breakpoint</p>
          </div>
          <div class="ds-u-hide-lg sg-demo-box-2">
            <div class="fpo">Hidden FPO block above lg breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-hide-xl</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden above xl breakpoint</p>
          </div>
          <div class="ds-u-hide-xl sg-demo-box-2">
            <div class="fpo">Hidden FPO block above xl breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-show-sm</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden below sm breakpoint</p>
          </div>
          <div class="ds-u-show-sm sg-demo-box-2">
            <div class="fpo">Hidden FPO block below sm breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-show-sm-2</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden below sm-2 breakpoint</p>
          </div>
          <div class="ds-u-show-sm-2 sg-demo-box-2">
            <div class="fpo">Hidden FPO block below sm-2 breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-show-md</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden below md breakpoint</p>
          </div>
          <div class="ds-u-show-md sg-demo-box-2">
            <div class="fpo">Hidden FPO block below md breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-show-lg</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden below lg breakpoint</p>
          </div>
          <div class="ds-u-show-lg sg-demo-box-2">
            <div class="fpo">Hidden FPO block below lg breakpoint</div>
          </div>
        </div>
        <hr />
        <code>ds-u-show-xl</code>
        <div class="sg-demo-box-2">
          <div size="sm">
            <p>The following FPO block is hidden below xl breakpoint</p>
          </div>
          <div class="ds-u-show-xl sg-demo-box-2">
            <div class="fpo">Hidden FPO block below xl breakpoint</div>
          </div>
        </div>
        <hr />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'visibility-utilities': VisibilityUtilities;
  }
}
