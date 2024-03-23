import { ReactNode } from 'react';

interface IShowViewProps {
  children: ReactNode;
  when: boolean;
}

const ShowView = ({ children, when }: IShowViewProps) => {
  return when ? children : null;
};

export default ShowView;
