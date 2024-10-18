import type { Meta, StoryObj } from '@storybook/react';

import { AuthorCard } from '@components/cards/AuthorCard';
import { DEFAULT_LINKS, STORY_DEFAULT_IMAGE_OBJ } from '@constants/storiesDefaults';

const meta = {
  component: AuthorCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/AuthorCard',
} satisfies Meta<typeof AuthorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAuthorCard: Story = {
  args: {
    avatar: STORY_DEFAULT_IMAGE_OBJ,
    companyName: 'Tech Corp',
    id: '1',
    name: 'John Doe',
    roleName: 'Software Engineer',
    socialLinks: DEFAULT_LINKS,
  },
};
