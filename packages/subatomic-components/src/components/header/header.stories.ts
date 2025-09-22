import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './header';

const meta = {
  title: 'Components/Header',
  tags: ['autodocs'],
  render: () => html`<ds-header></ds-header>`,
  component: 'ds-header'
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Transparent: Story = {
  args: {
    variant: 'transparent'
  }
};

export const Inverted: Story = {
  args: {
    inverted: true
  }
};

export const Simple: Story = {
  args: {
    isSimple: true
  }
};

export const MenuOnly: Story = {
  args: {
    isMenuOnly: true
  }
};

export const Wide: Story = {
  args: {
    size: 'wide'
  }
};

export const ExtraWide: Story = {
  args: {
    size: 'extra-wide'
  }
};
