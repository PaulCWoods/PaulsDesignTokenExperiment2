import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Grid',
  tags: ['autodocs'],
  render: () => html` <div class="ds-c-grid">
    <div class="ds-c-grid__item"><div class="fpo">Item 1</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 2</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 3</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 4</div></div>
  </div>`,
  component: 'ds-grid'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const GapSm: Story = {
  render: () => html` <div class="ds-c-grid ds-c-grid--gap-sm">
    <div class="ds-c-grid__item"><div class="fpo">Item 1</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 2</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 3</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 4</div></div>
  </div>`
};

export const ThreeUp: Story = {
  render: () => html` <div class="ds-c-grid ds-c-grid--3up">
    <div class="ds-c-grid__item"><div class="fpo">Item 1</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 2</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 3</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 4</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 5</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 6</div></div>
  </div>`
};

export const OneToTwoToFourUp: Story = {
  render: () => html` <div class="ds-c-grid ds-c-grid--1-2-4up">
    <div class="ds-c-grid__item"><div class="fpo">Item 1</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 2</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 3</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 4</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 5</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 6</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 7</div></div>
    <div class="ds-c-grid__item"><div class="fpo">Item 8</div></div>
  </div>`
};
