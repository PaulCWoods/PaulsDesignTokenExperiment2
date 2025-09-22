import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './checkout';

const meta = {
  title: 'Pages/Checkout',
  render: () => html`<course-checkout></course-checkout>`,
  component: 'course-checkout',
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {};
