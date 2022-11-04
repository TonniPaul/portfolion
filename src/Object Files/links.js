import { v4 as uuid } from "uuid";

const myLinks = [
  {
    id: uuid(),
    links: "https://github.com/tonnipaul",
    icons: "fa-brands fa-github class-purple",
  },
  {
    id: uuid(),
    links: "https://linkedin.com/in/tonnipaul",
    icons: "fa-brands fa-linkedin class-purple",
  },
  {
    id: uuid(),
    links: "https://twitter.com/tonnipaul",
    icons: "fa-brands fa-twitter class-purple",
  },
  {
    id: uuid(),
    links: "mailto:ariyoadeoyepaul@gmail.com",
    icons: "fa-solid fa-envelope class-purple",
  },
  // {
  //   id: uuid(),
  //   links: "https://instagram.com/tonnipaul",
  //   icons: "fa-brands fa-instagram class-purple",
  // },
  {
    id: uuid(),
    links: "tel:+2348162325194",
    icons: "fa-solid fa-phone class-purple",
  },
  {
    id: uuid(),
    links: "https://wa.me/2348162325194",
    icons: "fa-brands fa-square-whatsapp class-purple",
  },
];

export default myLinks;
