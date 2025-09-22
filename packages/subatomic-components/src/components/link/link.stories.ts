import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Link',
  tags: ['autodocs'],
  render: () => html`<a class="ds-c-link" href="#"> Link </a>`,
  component: 'ds-link'
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Knockout: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'var(--ds-theme-color-background-knockout)'
        }
      ]
    }
  },
  render: () => html`<a class="ds-c-link ds-c-link--knockout" href="#"> Link </a>`
};
