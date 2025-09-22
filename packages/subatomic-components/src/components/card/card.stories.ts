import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: () => html`<div class="ds-c-card dashboard-by-the-numbers">
    <div class="ds-c-card__header">
      <div class="fpo">Optional card header</div>
    </div>
    <div class="ds-c-card__body">
      <div class="fpo">Card body</div>
    </div>
    <div class="ds-c-card__footer">
      <div class="fpo">Optional card footer</div>
    </div>
  </div>`,
  component: 'ds-card'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
