import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Section',
  tags: ['autodocs'],
  component: 'section'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div class="ds-c-section"><div class="fpo">Section content</div></div>`
};

export const WithSectionHeader: Story = {
  render: () => html`
    <section class="ds-c-section">
      <header class="ds-c-section__header">
        <div class="ds-c-section__header-content">
          <h2 class="ds-c-section__heading">Section heading</h2>
          <div class="ds-c-section__description">Start building your cooler to have delicious Token Treats delivered right to your door.</div>
        </div>
      </header>
      <div class="fpo">Section content</div>
    </section>
  `
};

export const AlignCenter: Story = {
  render: () => html`
    <section class="ds-c-section ds-c-section--align-center">
      <header class="ds-c-section__header">
        <div class="ds-c-section__header-content">
          <h2 class="ds-c-section__heading">Section heading</h2>
          <div class="ds-c-section__description">Start building your cooler to have delicious Token Treats delivered right to your door.</div>
        </div>
      </header>
      <div class="fpo">Section content</div>
    </section>
  `
};

export const Small: Story = {
  render: () => html`
    <section class="ds-c-section ds-c-section--sm">
      <header class="ds-c-section__header">
        <div class="ds-c-section__header-content">
          <h2 class="ds-c-section__heading">Section heading</h2>
        </div>
      </header>
      <div class="fpo">Section content</div>
    </section>
  `
};

export const WithRightContent: Story = {
  render: () => html`
    <section class="ds-c-section ds-c-section--sm">
      <div class="ds-c-section__header">
        <h2 class="ds-c-section__heading">Overview</h2>
        <div class="ds-c-section__right">
          <div class="fpo">Right content</div>
        </div>
      </div>
      <div class="fpo">Section content</div>
    </section>
  `
};
