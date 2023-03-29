import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '.';

const meta: Meta<HeadingProps> = {
  title: 'Components/Layout/Heading',
  component: Heading
};

export default meta;

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'medium',
    children: 'Heading'
  }
};
