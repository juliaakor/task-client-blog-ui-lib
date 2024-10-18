import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { FacebookIcon } from '@assets/FacebookIcon';
import { InstagramIcon } from '@assets/InstagramIcon';
import { LinkedInIcon } from '@assets/LinkedinIcon';
import { TwitterIcon } from '@assets/TwitterIcon';

import { AvailableSocialsUnion, SocialsProps } from './types';

const SOCIALS_ICONS = [
  { alt: 'Instagram', icon: InstagramIcon },
  { alt: 'Twitter', icon: TwitterIcon },
  { alt: 'LinkedIn', icon: LinkedInIcon },
  { alt: 'Facebook', icon: FacebookIcon },
];

export const Socials = ({ className = '', iconStyle = '', isIncluded, links }: SocialsProps) => {
  return (
    <div className={clsx('flex', className)}>
      {SOCIALS_ICONS.map(({ alt, icon: Icon }) =>
        isIncluded.includes(alt.toLocaleLowerCase() as AvailableSocialsUnion) ? (
          <Link key={alt} href={links?.[alt.toLocaleLowerCase() as AvailableSocialsUnion] || ''} target="_blank">
            <Icon className={clsx('w-8 h-8 filter hover:brightness-200', iconStyle)} />
          </Link>
        ) : null
      )}
    </div>
  );
};
