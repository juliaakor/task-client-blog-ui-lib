import type { Meta, StoryObj } from '@storybook/react';
import { StaticImageData } from 'next/image';

import LinkedinIcon from '@assets/Linkedin.svg';
import { CategoryCard } from '@components/cards/CategoryCard';

const DEFAULT_ICON = LinkedinIcon as unknown as StaticImageData;

const meta = {
  component: CategoryCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/CategoryCard',
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumCategoryCard: Story = {
  args: {
    icon: DEFAULT_ICON,
    label: 'Medium Category',
    name: 'Category Medium',
    type: 'medium',
  },
};

export const SmallCategoryCard: Story = {
  args: {
    icon: DEFAULT_ICON,
    label: 'Small Category',
    name: 'Category Small',
    type: 'small',
  },
};
