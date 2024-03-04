import { HTMLProps, ReactNode } from 'react';

import './flat-card.css';

interface IFlatCardProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  customClass: string;
}

const FlatCard = ({
  children,
  className,
  customClass,
  ...props
}: IFlatCardProps) => {
  const classes = `flatCard-main  ${className} `;
  return (
    <div className={classes} {...props}>
      <div className={customClass}> {children} </div>
    </div>
  );
};

export default FlatCard;
