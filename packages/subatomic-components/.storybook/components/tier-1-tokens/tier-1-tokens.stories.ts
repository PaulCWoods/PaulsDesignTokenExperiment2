import { html } from 'lit';
import './colors';
import './animation';
import './border';
import './breakpoints';
import './shadows';

export default {
  title: 'Atoms/Design Tokens/Tier 1: Definitions',
  component: 'tier-1-tokens'
};

export const Colors = (context) => html`<tier-1-colors></tier-1-colors>`;

export const Border = (context) => html`<tier-1-border></tier-1-border>`;

export const Breakpoints = (context) => html`<tier-1-breakpoints></tier-1-breakpoints>`;

export const Shadows = (context) => html`<tier-1-shadows></tier-1-shadows>`;

export const Animation = (context) => html`<tier-1-animation></tier-1-animation>`;
