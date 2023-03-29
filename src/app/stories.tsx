import { Meta, StoryObj } from '@storybook/react';

import RootLayout, { RootLayoutProps } from './layout';
import Home from './page';

const meta: Meta<RootLayoutProps> = {
  title: 'app/Pages/RootLayout',
  component: RootLayout,
  argTypes: {
    children: {
      control: false
    }
  }
};

export default meta;

export const Deafault: StoryObj = {
  args: {
    children: <Home />
  }
};
