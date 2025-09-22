import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Sidebar Layout',
  tags: ['autodocs'],
  render: () =>
    html`<div class="ds-c-sidebar-layout">
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 1</div>
      </div>
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 2</div>
      </div>
    </div>`,
  component: 'ds-sidebar-layout'
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const GapNone: Story = {
  render: () =>
    html`<div class="ds-c-sidebar-layout ds-c-sidebar-layout--gap-none">
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 1</div>
      </div>
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 2</div>
      </div>
    </div>`
};

export const BreakXxl: Story = {
  render: () =>
    html`<div class="ds-c-sidebar-layout ds-c-sidebar-layout--break-xxl">
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 1</div>
      </div>
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 2</div>
      </div>
    </div>`
};

export const Reversed: Story = {
  render: () =>
    html`<div class="ds-c-sidebar-layout ds-c-sidebar-layout--reversed">
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 1</div>
      </div>
      <div class="ds-c-sidebar-layout__section">
        <div class="fpo">Section 2</div>
      </div>
    </div>`
};
