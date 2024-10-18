import type { Meta, StoryObj } from '@storybook/react';

import { PostCard } from '@components/cards/PostCard';
import { STORY_DEFAULT_IMAGE_OBJ } from '@constants/storiesDefaults';

const meta = {
  component: PostCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/PostCard',
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargePostCard: Story = {
  args: {
    buttonLinkTitle: 'Read More',
    category: 'Category 1',
    image: STORY_DEFAULT_IMAGE_OBJ,
    preview: 'Preview of the large post card.',
    subTitle: 'Subtitle for the large post card.',
    title: 'Large Post Title',
    type: 'large',
  },
};

export const MediumPostCard: Story = {
  args: {
    buttonLinkTitle: 'Read More',
    category: 'Category 2',
    image: STORY_DEFAULT_IMAGE_OBJ,
    preview: 'Preview of the medium post card.',
    subTitle: 'Subtitle for the medium post card.',
    title: 'Medium Post Title',
    type: 'medium',
  },
};

export const SmallPostCard: Story = {
  args: {
    buttonLinkTitle: 'Read More',
    category: 'Category 3',
    image: STORY_DEFAULT_IMAGE_OBJ,
    preview: 'Preview of the small post card.',
    subTitle: 'Subtitle for the small post card.',
    title: 'Small Post Title',
    type: 'small',
  },
};
