import React, { ReactNode } from 'react';
import './button.css';

interface IButtonProps {
  className: string;
  href: string;
  children: ReactNode;
  target: '_blank' | '_self' | '_parent' | '_top' | string;
}

const Button = ({ className, href, children, target }: IButtonProps) => {
  const classes = className;

  return (
    <a href={href} className={classes} target={target}>
      {children}
    </a>
  );
};

export default Button;
