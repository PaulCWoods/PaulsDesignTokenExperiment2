import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import mokaModeImg from '../../assets/moka-mode.png';
const meta = {
  title: 'Components/Product Card',
  tags: ['autodocs'],
  render: () => html` <div style="max-width:35rem;">
    <div class=" ds-c-product-card ds-c-product-card--subtle ">
      <div class="ds-c-product-card__body">
        <div class="ds-c-badge">
          <span class="ds-c-badge__text">Best seller</span>
        </div>
        <img class="ds-c-product-card__image" src="${mokaModeImg}" alt="Chocolate ice cream with chocolate chunks" />
      </div>
      <div class="ds-c-product-card__footer">
        <h3 class="ds-c-product-card__heading">moka-mode</h3>
        <p class="ds-c-product-card__description">
          Lorem ipsum dolor sit amet consectetur. Quisque dui tellus duis pretium aenean ornare nibh blandit.
        </p>
      </div>
    </div>
  </div>`,
  component: 'ds-product-card'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
