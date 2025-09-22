import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Layout Container',
  tags: ['autodocs'],

  component: 'ds-layout-container'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div class="ds-c-layout-container"><div class="fpo">Layout container</div></div>`
};

export const Wide: Story = {
  render: () => html`<div class="ds-c-layout-container ds-c-layout-container--wide"><div class="fpo">Layout container</div></div>`
};
