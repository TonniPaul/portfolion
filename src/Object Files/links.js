import { v4 as uuid } from "uuid";

const myLinks = [
  {
    id: uuid(),
    links: 'https://github.com/tonnipaul',
    icons: 'fa-brands fa-github class-purple',
    label: 'connect with me on github ',
  },
  {
    id: uuid(),
    links: 'https://linkedin.com/in/tonnipaul',
    icons: 'fa-brands fa-linkedin class-purple',
    label: 'connect with me on linkedin ',
  },
  {
    id: uuid(),
    links: 'https://twitter.com/tonnipaul',
    icons: 'fa-brands fa-x-twitter',
    label: 'connect with me on twitter ',
  },
  {
    id: uuid(),
    links: 'mailto:ariyoadeoyepaul@gmail.com',
    icons: 'fa-solid fa-envelope class-purple',
    label: 'Send me an email ',
  },
  {
    id: uuid(),
    links: 'https://instagram.com/tonnipaul',
    icons: 'fa-brands fa-instagram class-purple',
    label: 'connect with me on instagram ',
  },
  {
    id: uuid(),
    links: 'tel:+2347025007998',
    icons: 'fa-solid fa-phone class-purple',
    label: 'Call me on my cellphone number ',
  },
  {
    id: uuid(),
    links: 'https://wa.me/2347025007998',
    icons: 'fa-brands fa-square-whatsapp class-purple',
    label: 'connect with me on WhatsApp',
  },
];

export default myLinks;
