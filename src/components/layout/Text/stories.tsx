import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '.';

const meta: Meta<TextProps> = {
  title: 'Components/Layout/Text',
  component: Text
};

export default meta;

export const Default: StoryObj<TextProps> = {
  args: {
    size: 'medium',
    children: 'Text component.'
  },
  argTypes: {
    asChild: {
      control: false
    }
  }
};

export const AsChild: StoryObj<TextProps> = {
  args: {
    size: 'medium',
    asChild: true,
    children: <span>Text component rendered as span.</span>
  },
  argTypes: {
    children: {
      control: false
    }
  }
};
