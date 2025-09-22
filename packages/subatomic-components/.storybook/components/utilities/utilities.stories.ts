import {html} from 'lit';
import './visibility-utilities';
import './spacing-padding-utilities';
import './spacing-margin-utilities';
import './display-utilities';
import './typography-utilities';

export default {
  title: 'Atoms/Utilities',
  component: 'utilities',
};

export const DisplayUtilities = () => html`<display-utilities></display-utilities>`;
export const SpacingMarginUtilities = () => html`<spacing-margin-utilities></spacing-margin-utilities>`;
export const SpacingPaddingUtilities = () => html`<spacing-padding-utilities></spacing-padding-utilities>`;
export const VisibilityUtilities = () => html`<visibility-utilities></visibility-utilities>`;
export const TypographyUtilities = () => html`<typography-utilities></typography-utilities>`;
