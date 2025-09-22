import { html } from 'lit';
import heroImg from '../../assets/ice-cream.png';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Hero',
  tags: ['autodocs'],
  render: () => html`<div class=" ds-c-hero ">
    <img class="ds-c-hero__image" src="${heroImg}" alt="Ice cream" />

    <div class="ds-c-hero__inner">
      <div class="ds-c-hero__body">
        <div class="ds-c-layout-container ds-c-hero__body-inner">
          <h1 class="ds-c-hero__heading">Flavored with real tokens</h1>
          <p class="ds-c-hero__description"></p>
          <button type="button" class=" ds-c-button ds-c-button--primary ds-c-hero__button">Order Now</button>
        </div>
      </div>
    </div>
  </div>`,
  component: 'ds-hero'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
