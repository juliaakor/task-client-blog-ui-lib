import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { LinkedInIcon } from '@assets/LinkedinIcon';
import { Button } from '@components/Button';
import { ButtonType } from '@components/Button/types';

const DEFAULT_ICON = <LinkedInIcon width={21} height={21} />;

const meta = {
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandButton: Story = {
  args: {
    label: 'Brand Button',
    name: 'brand-button',
    styleType: ButtonType.Brand,
  },
};

export const WhiteButton: Story = {
  args: {
    label: 'White Button',
    name: 'white-button',
    styleType: ButtonType.White,
  },
};

export const BrandButtonWithCustomClass: Story = {
  args: {
    className: 'rounded-full shadow-lg w-1/3 m-auto',
    label: 'Custom Class Brand Button',
    name: 'custom-class-brand-button',
    styleType: ButtonType.Brand,
  },
};

export const WhiteButtonWithCustomClass: Story = {
  args: {
    className: 'rounded-full shadow-lg w-2/3 m-auto border border-indigo-600',
    label: 'Custom Class White Button',
    name: 'custom-class-white-button',
    styleType: ButtonType.White,
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button',
    name: 'disabled-button',
    styleType: ButtonType.Brand,
  },
};

export const BrandButtonWithIcon: Story = {
  args: {
    children: DEFAULT_ICON,
    className: 'flex items-center justify-center gap-5',
    label: 'Brand Button with Icon',
    name: 'brand-button-icon',
    styleType: ButtonType.Brand,
  },
};

export const WhiteButtonWithIcon: Story = {
  args: {
    children: DEFAULT_ICON,
    className: 'flex items-center justify-center gap-5',
    label: 'White Button with Icon',
    name: 'white-button-icon',
    styleType: ButtonType.White,
  },
};
