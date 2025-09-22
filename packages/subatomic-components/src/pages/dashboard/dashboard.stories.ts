import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './dashboard';

const meta = {
  title: 'Pages/Dashboard',
  render: () => html`<course-dashboard></course-dashboard>`,
  component: 'course-dashboard',
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {}
};
