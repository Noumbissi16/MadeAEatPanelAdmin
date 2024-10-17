export type INewUser = {
  username: string;
  email: string;
  password: string;
};

export type IUser = {
  _id: string;
  username: string;
  email: string;
  isAuthenticated: boolean;
  agency: string;
  token: string;
  profileImage: string;
  profileAgence: string
};

export type IUserDataLogin = {
  agency: string;
  username: string;
  email: string;
  password: string;
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
  _id: string;
  name: string;
  ville: string;
  location: string;
  ownedBy: string;
  profile: string;
};

export type RestaurantInfos = {
  closingHour: string;
  commandes: any[]; // Depending on what 'commandes' should contain, replace `any` with a more specific type if known.
  createdAt: string;
  location: string;
  menus: any[]; // Same as 'commandes', use a more specific type if available.
  name: string;
  openingDays: string[];
  openingHour: string;
  ownedBy: {
    _id: string;
    name: string;
    email: string;
    profileImage: string;
  };
  phoneNumber: string;
  profile: string;
  updatedAt: string;
  ville: string;
  __v: number;
  _id: string;
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
