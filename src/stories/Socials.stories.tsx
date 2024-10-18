import type { Meta, StoryObj } from '@storybook/react';

import { Socials } from '@components/Socials';
import { AvailableSocials } from '@components/Socials/types';
import { DEFAULT_LINKS } from '@constants/storiesDefaults';

const meta = {
  component: Socials,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Socials',
} satisfies Meta<typeof Socials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isIncluded: [],
    links: {},
  },
};

export const AllSocials: Story = {
  args: {
    className: 'gap-6',
    iconStyle: 'w-10 h-10',
    isIncluded: [
      AvailableSocials.Facebook,
      AvailableSocials.Instagram,
      AvailableSocials.Linkedin,
      AvailableSocials.Twitter,
    ],
    links: DEFAULT_LINKS,
  },
};

export const CustomStyled: Story = {
  args: {
    className: 'bg-gray-200 p-4 rounded gap-8 w-1/3 m-auto',
    iconStyle: 'max-w-5 max-h-5',
    isIncluded: [AvailableSocials.Facebook, AvailableSocials.Twitter],
    links: {
      [AvailableSocials.Facebook]: 'https://facebook.com',
      [AvailableSocials.Twitter]: 'https://twitter.com',
    },
  },
};
