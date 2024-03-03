import { v4 as uuid } from "uuid";

const navData = [
  {
    id: crypto.randomUUID(),
    icon: 'fa-solid fa-address-card',
    description: 'About',
    link: '/#about',
  },
  {
    id: crypto.randomUUID(),
    icon: 'fa-solid fa-code',
    description: 'Projects',
    link: '/#project',
  },
  {
    id: crypto.randomUUID(),
    icon: 'fa-solid fa-toolbox',
    description: 'Skills',
    link: '/#skill',
  },
  {
    id: crypto.randomUUID(),
    icon: 'fa-solid fa-envelope',
    description: 'Contact',
    link: '/#contact',
  },
  {
    id: crypto.randomUUID(),
    icon: 'fa-brands fa-blogger',
    description: 'Blog',
    link: 'https://blog.tonnipaul.com',
  },
];
export default navData;
