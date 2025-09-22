import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: () => html`<button class="ds-c-button">Button</button>`,
  component: 'ds-button'
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Primary: Story = {
  render: () => html`<button class="ds-c-button ds-c-button--primary">Button</button>`
};

export const FullWidth: Story = {
  render: () => html`<button class="ds-c-button ds-c-button--full-width">Button</button>`
};
