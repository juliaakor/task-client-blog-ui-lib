import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@components/Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Typography',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Title Text',
    tag: 'title',
  },
};

export const Label: Story = {
  args: {
    children: 'Label Text',
    tag: 'label',
  },
};

export const Heading1: Story = {
  args: {
    children: 'Heading 1 Text',
    tag: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    children: 'Heading 2 Text',
    tag: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    children: 'Heading 3 Text',
    tag: 'h3',
  },
};

export const Heading4: Story = {
  args: {
    children: 'Heading 4 Text',
    tag: 'h4',
  },
};

export const Heading5: Story = {
  args: {
    children: 'Heading 5 Text',
    tag: 'h5',
  },
};

export const Heading6: Story = {
  args: {
    children: 'Heading 6 Text',
    tag: 'h6',
  },
};

export const Body1: Story = {
  args: {
    children: 'Body 1 Text',
    tag: 'body1',
  },
};

export const Body2: Story = {
  args: {
    children: 'Body 2 Text',
    tag: 'body2',
  },
};

export const Caps1: Story = {
  args: {
    children: 'Caps 1 Text',
    tag: 'cap1',
  },
};

export const Caps2: Story = {
  args: {
    children: 'Caps 2 Text',
    tag: 'cap2',
  },
};

export const Caps3: Story = {
  args: {
    children: 'Caps 3 Text',
    tag: 'cap3',
  },
};
