import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { CategoryCardProps } from '@components/cards/types';
import { Typography } from '@components/Typography';

export const CategoryCardSmall = ({ className, icon, label }: CategoryCardProps) => {
  return (
    <div
      className={clsx(
        'bg-transparent hover:bg-yellow text-foreground p-6 flex items-center gap-4 border border-white-03',
        className
      )}
    >
      <Image className="bg-beige-01 rounded-md" src={icon} alt={label} />
      <Typography tag="h5">{label}</Typography>
    </div>
  );
};
