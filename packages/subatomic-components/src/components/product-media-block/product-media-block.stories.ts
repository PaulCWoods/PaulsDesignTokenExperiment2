import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import mokaModeImg from '../../assets/moka-mode.png';

const meta = {
  title: 'Components/Product Media Block',
  tags: ['autodocs'],
  render: () => html`<div class=" ds-c-product-media-block ">
    <div class="ds-c-product-media-block__left">
      <div class="ds-c-product-media-block__media">
        <img class="ds-c-product-media-block__image" src="${mokaModeImg}" alt="Moka ice cream" />
      </div>

      <div class="ds-c-product-media-block__content">
        <span class="ds-c-product-media-block__heading">Product name</span>
        <span class="ds-c-product-media-block__meta">Quantity 1</span>
      </div>
    </div>
    <div class="ds-c-product-media-block__right">
      <div class="ds-c-product-media-block__price">$50.00</div>
    </div>
  </div>`,
  component: 'ds-product-media-block'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Small: Story = {
  render: () => html`<div class=" ds-c-product-media-block ds-c-product-media-block--sm ">
    <div class="ds-c-product-media-block__left">
      <div class="ds-c-product-media-block__content">
        <span class="ds-c-product-media-block__heading">Product name</span>
        <span class="ds-c-product-media-block__meta">Quantity 1</span>
      </div>
    </div>
    <div class="ds-c-product-media-block__right">
      <div class="ds-c-product-media-block__price">$50.00</div>
    </div>
  </div>`
};
