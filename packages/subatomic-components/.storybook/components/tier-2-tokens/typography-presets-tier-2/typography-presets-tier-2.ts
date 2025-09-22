import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../../typography-specimen/typography-specimen';

@customElement('typography-presets-tier-2')
export class TypographyPresetsTier2 extends LitElement {
  render() {
    return html`
        <div class="theme-typography-presets-tier-2" style="padding: 2rem;">

        <h1 tagName="h1" variant="headline-lg">Typography presets</h1>
          <div styleModifier="ds-u-margin-bottom-md">
            <p>
              Typography presets define the typographic building blocks that are used by Ds components. These presets combine font family, weight,
              size, line height, and optionally text-transform and letter spacing.
            </p>
          </div>
          <typography-specimen
            styleModifier="ds-u-theme-typography-display-default"
            typographyPresetName="theme-typography-display-default"
            value="theme-typography-display-default"
            ></typography-specimen>
          <typography-specimen
            styleModifier="ds-u-theme-typography-display-sm"
            typographyPresetName="theme-typography-display-sm"
            value="theme-typography-display-sm"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-headline-lg"
            typographyPresetName="theme-typography-headline-lg"
            value="theme-typography-headline-lg"
            ></typography-specimen>
          <typography-specimen
            styleModifier="ds-u-theme-typography-headline-default"
            typographyPresetName="theme-typography-headline-default"
            value="theme-typography-headline-default"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-headline-sm"
            typographyPresetName="theme-typography-headline-sm"
            value="theme-typography-headline-sm"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-title-lg"
            typographyPresetName="theme-typography-title-lg"
            value="theme-typography-title-lg"
            ></typography-specimen>
          <typography-specimen
            styleModifier="ds-u-theme-typography-title-default"
            typographyPresetName="theme-typography-title-default"
            value="theme-typography-title-default"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-title-sm"
            typographyPresetName="theme-typography-title-sm"
            value="theme-typography-title-sm"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-title-sm"
            typographyPresetName="theme-typography-title-sm"
            value="theme-typography-title-sm"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-label-lg"
            typographyPresetName="theme-typography-label-lg"
            value="theme-typography-label-lg"
            ></typography-specimen>
          <typography-specimen
            styleModifier="ds-u-theme-typography-label-default"
            typographyPresetName="theme-typography-label-default"
            value="theme-typography-label-default"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-label-sm"
            typographyPresetName="theme-typography-label-sm"
            value="theme-typography-label-sm"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-body-lg"
            typographyPresetName="theme-typography-body-lg"
            value="theme-typography-body-lg"
            ></typography-specimen>
          <typography-specimen
            styleModifier="ds-u-theme-typography-body-default"
            typographyPresetName="theme-typography-body-default"
            value="theme-typography-body-default"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-body-sm"
            typographyPresetName="theme-typography-body-sm"
            value="theme-typography-body-sm"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-meta-default"
            typographyPresetName="theme-typography-meta-default"
            value="theme-typography-meta-default"
            ></typography-specimen>
            <typography-specimen
            styleModifier="ds-u-theme-typography-meta-sm"
            typographyPresetName="theme-typography-meta-sm"
            value="theme-typography-meta-sm"
            ></typography-specimen>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'typography-presets': TypographyPresetsTier2;
  }
}
