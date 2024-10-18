import { StaticImageData } from 'next/image';

import { PostCardLarge } from '@components/cards/PostCardLarge';
import { PostCardMedium } from '@components/cards/PostCardMedium';
import { PostCardSmall } from '@components/cards/PostCardSmall';

export const postCardComponents = {
  large: PostCardLarge,
  medium: PostCardMedium,
  small: PostCardSmall,
};

export type PostTags = keyof typeof postCardComponents;

export interface PostCardProps {
  type: PostTags;
  title: string;
  subTitle?: string;
  buttonLinkTitle?: string;
  category?: string;
  preview?: string;
  image?: StaticImageData;
  imageClassName?: string;
  className?: string;
  label?: string;
  onClickButtonClick?: () => void;
}
