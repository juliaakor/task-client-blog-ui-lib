import { StaticImageData } from 'next/image';

import { AvailableSocialsUnion } from '@components/Socials/types';

export interface AuthorCardProps {
  id: string;
  avatar?: StaticImageData;
  name: string;
  roleName?: string;
  companyName?: string;
  socialLinks?: Record<AvailableSocialsUnion, string>;
  className?: string;
  onCardClick?: (authorId: string) => void;
}
