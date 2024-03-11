export interface IStacksProp {
  _id: string;
  name: string;
}

export interface IProjectTypes {
  _id: string;
  title: string;
  description: string;
  image: string;
  stacks: IStacksProp[];
  liveSite: string;
  github: string;
  designer: string;
}
