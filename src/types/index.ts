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

export type MenuItem = {
  nom: string;
  prix: number;
  id: number;
  imgMenu: string;
  desc: string;
};

export type IRestaurant = {
  id: number;
  ouvert: boolean;
  nomResto: string;
  town: string;
  localisation: string;
  imgAdmin: string;
  imgResto: string;
  horraire: string;
  menu: MenuItem[];
};

export type Column = {
  Header: string;
  accessor: string;
};

export type TableColumn = {
  Header: string;
  columns: Column[];
};

export type TableColumns = TableColumn[];

export interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  position?: { x: number; y: number };
}
