import { PortableTextComponents } from '@portabletext/react';
import { imageSource } from '../../sanity/client.config';

import './rich-text.css';

const RichTextComponent: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div>
          <img src={imageSource(value).url()} alt="user-image" />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }) => {
      return <ul className="about-me-text rich-text-ul"> {children}</ul>;
    },
    number: ({ children }) => {
      return <ol> {children}</ol>;
    },
  },
  block: {
    h1: ({ children }) => {
      return <h1>{children}</h1>;
    },
    h2: ({ children }) => {
      return <h2>{children}</h2>;
    },
    h3: ({ children }) => {
      return <h3>{children}</h3>;
    },
    h4: ({ children }) => {
      return <h4>{children}</h4>;
    },
    h5: ({ children }) => {
      return <h5>{children}</h5>;
    },
    h6: ({ children }) => {
      return <h6>{children}</h6>;
    },
    normal: ({ children }) => {
      return <p className="about-me-text">{children}</p>;
    },
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a href={value.href} className="get-in-touch-btn">
          {children}
        </a>
      );
    },
  },
};

export default RichTextComponent;
