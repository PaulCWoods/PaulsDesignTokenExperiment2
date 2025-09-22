import { html } from 'lit';
import './colors';
import './border';
import './shadows';
import './animation';

export default {
  title: 'Atoms/Design Tokens/Tier 2: Usage',
  component: 'tier-2-tokens'
};

export const Colors = (context) => html`<tier-2-colors></tier-2-colors>`;

export const Border = (context) => html`<tier-2-border></tier-2-border>`;

export const Shadows = (context) => html`<tier-2-shadows></tier-2-shadows>`;

export const Animation = (context) => html`<tier-2-animation></tier-2-animation>`;
