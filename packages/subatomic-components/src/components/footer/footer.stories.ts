import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html`<footer class="ds-c-footer ">
    <div class="ds-c-layout-container ">
      <div class="ds-c-footer__inner">
        <div class="ds-c-footer__left">
          <h2 class="ds-c-footer__heading">It's Like Dessert For Your Inbox</h2>
          <p class="ds-c-footer__description">
            Sign up for our newsletter to get the latest news, updates, and special offers delivered right to your inbox.
          </p>
          <form class="ds-c-footer__newsletter">
            <div class="ds-c-footer__text-field">
              <div class=" ds-c-text-field ds-c-text-field--hide-label ds-c-text-field--inverted ">
                <label class="ds-c-text-field__label" for="footer-newsletter">Promo code </label>
                <div class="ds-c-text-field__body">
                  <input
                    class="ds-c-text-field__input"
                    type="text"
                    id="footer-newsletter"
                    required="true"
                    aria-describedby=""
                    placeholder="Your email address"
                  />
                </div>
              </div>
            </div>
            <div class="ds-c-footer__button">
              <button type="button" class=" ds-c-button ds-c-button--primary ">Apply</button>
            </div>
          </form>
        </div>
        <div class="ds-c-footer__right">
          <nav class="ds-c-footer__nav" role="footer navigation">
            <div class="ds-c-footer__nav-group">
              <h2 class="ds-c-footer__nav-heading">About</h2>
              <ul class="ds-c-footer__nav-list">
                <li class="ds-c-footer__nav-item">
                  <a href="/" class="ds-c-footer__nav-link">Our Story</a>
                </li>
                <li class="ds-c-footer__nav-item">
                  <a href="/" class="ds-c-footer__nav-link">Store Locations</a>
                </li>
              </ul>
            </div>
            <div class="ds-c-footer__nav-group">
              <h2 class="ds-c-footer__nav-heading">Help</h2>
              <ul class="ds-c-footer__nav-list">
                <li class="ds-c-footer__nav-item">
                  <a href="/" class="ds-c-footer__nav-link">Customer Service</a>
                </li>
                <li class="ds-c-footer__nav-item">
                  <a href="/" class="ds-c-footer__nav-link">Shipping Information</a>
                </li>
                <li class="ds-c-footer__nav-item">
                  <a href="/" class="ds-c-footer__nav-link">Order Status</a>
                </li>
                <li class="ds-c-footer__nav-item">
                  <a href="/" class="ds-c-footer__nav-link">International Orders</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </footer>`,
  component: 'ds-footer'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
