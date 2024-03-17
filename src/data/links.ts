import { ISvgIconNameTypes } from '../types/svg-icon-type';

export interface ISocialLinkTypes {
  id: string;
  link: string;
  icon: ISvgIconNameTypes;
  label: string;
}

const myLinks: ISocialLinkTypes[] = [
  {
    id: crypto.randomUUID(),
    link: 'https://github.com/tonnipaul',
    icon: 'github',
    label: 'connect with me on github ',
  },
  {
    id: crypto.randomUUID(),
    link: 'https://linkedin.com/in/tonnipaul',
    icon: 'linkedin',
    label: 'connect with me on linkedin ',
  },
  {
    id: crypto.randomUUID(),
    link: 'https://twitter.com/tonnipaul',
    icon: 'x-twitter',
    label: 'connect with me on twitter ',
  },
  {
    id: crypto.randomUUID(),
    link: 'mailto:ariyoadeoyepaul@gmail.com',
    icon: 'mail',
    label: 'Send me an email ',
  },
  {
    id: crypto.randomUUID(),
    link: 'https://instagram.com/tonnipaul',
    icon: 'instagram',
    label: 'connect with me on instagram ',
  },
  {
    id: crypto.randomUUID(),
    link: 'tel:+2347025007998',
    icon: 'call',
    label: 'Call me on my cellphone number ',
  },
  {
    id: crypto.randomUUID(),
    link: 'https://wa.me/2347025007998',
    icon: 'whatsapp',
    label: 'connect with me on WhatsApp',
  },
];

export default myLinks;
