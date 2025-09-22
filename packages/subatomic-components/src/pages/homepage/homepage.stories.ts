import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './homepage';

const meta = {
  title: 'Pages/Homepage',
  render: () => html`<course-homepage></course-homepage>`,
  component: 'course-homepage',
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {};
