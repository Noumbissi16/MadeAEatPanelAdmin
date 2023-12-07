export type INewUser = {
  username: string;
  email: string;
  password: string;
};

export type IUser = {
  id: number;
  username: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
};

export type IAction = {
  type: string;
  payload?: any;
};

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};
