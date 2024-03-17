import { FC, SVGProps } from 'react';
import { ISvgIconNameTypes } from '../../types/svg-icon-type';

interface ISvgProps extends SVGProps<SVGSVGElement> {
  name: ISvgIconNameTypes;
}

const SvgIcon: FC<ISvgProps> = ({ name, ...props }) => {
  return (
    <svg fill="currentColor" {...props}>
      <use href={`/assets/sprite.svg#${name}`} />
    </svg>
  );
};

export default SvgIcon;
