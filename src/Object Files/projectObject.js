import { v4 as uuid } from "uuid";

export const projectData = [
  {
    id: uuid(),
    title: "TONNIPAUL's BLOG",
    image: "./assets/blog.png",
    description:
      "A blog dedicated to educating about various aspects of web technology through insightful blog content.",
    stacks: ["TypeScript", "Next JS", "Styled Component", "Sanity CLI"],
    liveSite: "https://blog.tonnipaul.com/",
    github: "https://github.com/TonniPaul/blog",
    design: "TonniPaul",
  },
  {
    id: uuid(),
    title: "THRIFTS BY RONN",
    image: "./assets/tbr.png",
    description:
      "Crafted a sleek e-commerce platform for a thrift store, allowing effortless shopping, cart management, and a delightful user experience.",
    stacks: ["TypeScript", "Next JS", "Styled Component", "Zustand"],
    liveSite: "https://tbr.tonnipaul.com/",
    github: "https://github.com/TonniPaul/tbr",
    design: "TonniPaul",
  },
  {
    id: uuid(),
    title: "COUNTRY DATA ",
    image: "./assets/country-data-app.png",
    description: "Find important data about any country",
    stacks: ["TypeScript", "React", "CSS", "API"],
    liveSite: "https://country-data.tonnipaul.com/",
    github: "https://github.com/TonniPaul/Country-Data",
    design: "FrontEndMentor, TonniPaul",
  },
  {
    id: uuid(),
    title: "CRYPTO TRACK",
    image: "./assets/crypto-track.png",
    description:
      "Get realtime updates on the current market price of all crypto coins.",
    stacks: ["TypeScript", "Next JS", "Styled Component", "Coingecko API"],
    liveSite: "https://cryptotrack.tonnipaul.com/",
    github: "https://github.com/TonniPaul/crypto",
    design: "TonniPaul",
  },
  {
    id: uuid(),
    title: "NESTED COMMENT SECTION ",
    image: "./assets/icm.png",
    description: "Interactive comment section  ",
    stacks: ["TypeScript", "Next JS", "Styled Component"],
    liveSite: "https://comment-section.tonnipaul.com",
    github: "https://github.com/TonniPaul/interactive-comment",
    design: "FrontEndMentor",
  },
  {
    id: uuid(),
    title: "SHORTLY (URL SHORTENER) ",
    image: "./assets/url-shortener.png",
    description: "The quickest way to shorten your URLs.",
    stacks: ["TypeScript", "Next JS", "CSS Module", "API"],
    liveSite: "https://shorturl.tonnipaul.com",
    github: "https://github.com/TonniPaul/url-shortener",
    design: "FrontEndMentor, TonniPaul",
  },
  {
    id: uuid(),
    title: "BABYWEARS NG",
    image: "./assets/ltbws.png",
    description: "An online store selling baby and kids wears and accessories",
    stacks: ["WordPress", "CSS"],
    liveSite: "https://babywears.ng",
    github: "",
    hiddenClass: "hiddenClass",
    design: "TonniPaul",
  },
  {
    id: uuid(),
    title: "TODO WEB",
    image: "./assets/todo.png",
    description: "Create and manage Tasks or to-do lists. ",
    stacks: ["React", "CSS", "FontAwesome Icons"],
    liveSite: "https://todo.tonnipaul.com",
    github: "https://github.com/TonniPaul/Todo-App-/",
    design: "TonniPaul",
  },
  {
    id: uuid(),
    title: "PORTFOLIO WEBSITE",
    image: "./assets/portfolio.png",
    description: "My personal website",
    stacks: ["React", "CSS", "Framer Motion", "Flaticons"],
    liveSite: "https://tonnipaul.com",
    github: "https://github.com/TonniPaul/portfolion",
    design: "TonniPaul (Inspo: Twitter & Dribble)",
  },

  {
    id: uuid(),
    title: "ADVICE GENERATOR",
    image: "./assets/advicegen.jpg",
    description: "An API-driven advice generator web application",
    stacks: ["React", "CSS", "API"],
    liveSite: "https://advice-generator-rho-six.vercel.app/",
    github: "https://github.com/TonniPaul/adviceGenerator",
    design: "FrontEnd Mentor",
  },
  {
    id: uuid(),
    title: "MUSICA ",
    image: "./assets/musica.png",
    description:
      "A Music Application template, (Implemented the search feature )",
    stacks: ["React", "CSS", "Rapid API", "Framer Motion"],
    liveSite: "https://musicabytonnipaul.vercel.app/",
    github: "https://github.com/tonniPaul/musica",
    design: "#360CODINGCHALLENGE 0n Twitter",
  },
  {
    id: uuid(),
    title: "CHATSCRUM",
    image: "./assets/chatscrum.png",
    description:
      "Web-based task organization application features drag-and-drop functionality",
    stacks: ["React", "CSS", "API"],
    liveSite: "http://prello-six.vercel.app/",
    github: "https://github.com/tonniPaul/prello",
    design: "LinuxJobber",
  },
  {
    id: uuid(),
    title: "MEME GENERATOR",
    image: "./assets/memelarge.png",
    description: "Generate Random Meme Image and Add your personalized caption",
    stacks: ["React", "CSS"],
    liveSite: "https://tonnimeme.vercel.app",
    github: "https://github.com/TonniPaul/meme",
    design: "Scrimba",
  },
  {
    id: uuid(),
    title: "DICE GAME",
    image: "./assets/dicegame.png",
    description:
      "The dice game generates random dice numbers and declares the winner when clicked",
    stacks: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://tonnipaul.github.io/dice-game/",
    github: "https://github.com/TonniPaul/dice-game",
    design: "Angela Yu (UDEMY)",
  },
  {
    id: uuid(),
    title: "FITNESS WEBSITE TEMPLATE",
    image: "./assets/fitnesssite.png",
    description: "This is a fitness website template.",
    liveSite: "https://tonnipaul.github.io/My-gridisite/",
    stacks: ["React", "CSS", "UnSplash Images"],
    github: "https://github.com/TonniPaul/My-gridisite",
    design: "Travasery Media (Youtube)",
  },
  {
    id: uuid(),
    title: "Landing Page",
    image: "./assets/web-dev.png",
    description: "Landing Page for a web developer",
    stacks: ["HTML", "CSS", "BootStrap"],
    liveSite: "https://tonnipaulweb.vercel.app/",
    github: "https://github.com/TonniPaul/tonnipaulweb",
    design: "Angela Yu (UDEMY)",
  },
];
