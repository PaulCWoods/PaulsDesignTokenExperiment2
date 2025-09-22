import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Crazy Grid',
  tags: ['autodocs'],
  render: () => html`<div class="ds-c-crazy-grid">
    <div class="ds-c-crazy-grid__item">
      <div class="fpo">Crazy grid item</div>
    </div>

    <div class="ds-c-crazy-grid__item">
      <div class="fpo">Crazy grid item</div>
    </div>
  </div>`,
  component: 'ds-crazy-grid'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
