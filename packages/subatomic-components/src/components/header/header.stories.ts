import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import './header';

const meta = {
  title: 'Components/Header',
  tags: ['autodocs'],
  render: (args) => html`<ds-header 
    .variant=${args.variant}
    .size=${args.size}
    ?isMenuOnly=${args.isMenuOnly}
    ?isSimple=${args.isSimple}
    ?inverted=${args.inverted}
  ></ds-header>`,
  component: 'ds-header',
  argTypes: {
    variant: {
      control: 'select',
      options: [undefined, 'transparent']
    },
    size: {
      control: 'select', 
      options: [undefined, 'wide', 'extra-wide']
    },
    isMenuOnly: { control: 'boolean' },
    isSimple: { control: 'boolean' },
    inverted: { control: 'boolean' }
  }
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
