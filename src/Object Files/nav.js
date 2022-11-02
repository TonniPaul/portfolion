import { v4 as uuid } from "uuid";

const navData = [
  {
    id: uuid(),
    icon: "fa-solid fa-house",
    description: "Home",
    link: "#home",
  },
  {
    id: uuid(),
    icon: "fa-solid fa-address-card",
    description: "About",
    link: "#about",
  },
  {
    id: uuid(),
    icon: "fa-solid fa-code",
    description: "Projects",
    link: "#project",
  },
  {
    id: uuid(),
    icon: "fa-solid fa-toolbox",
    description: "Skills",
    link: "#skill",
  },
  {
    id: uuid(),
    icon: "fa-solid fa-envelope",
    description: "Contact",
    link: "#contact",
  },
];
export default navData;
