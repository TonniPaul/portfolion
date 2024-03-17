import { PortableTextBlock } from '@portabletext/types';

export interface IAboutTypes {
  name: string;
  description: string;
  image: string;
  about: PortableTextBlock;
  interest: string[];
}
