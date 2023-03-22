import create from 'zustand';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  isDeleted: string;
  deletedAt: string;
  updatedAt: string;
}

interface StoreState {
  user: IUser | undefined;
  setUser: (user: IUser) => void;
  resetUser: () => void;
  pageView: 'form' | 'dashboard';
  setPageView: (view: 'form' | 'dashboard') => void;
}

const useStore = create<StoreState>((set) => ({
  user: undefined,
  pageView: 'form',
  setUser: (user: IUser) =>
    set((state) => ({
      ...state,
      user: user,
    })),
  resetUser: () =>
    set((state) => ({
      ...state,
      user: undefined,
    })),
  setPageView: (view: 'form' | 'dashboard') =>
    set((state) => ({
      ...state,
      pageView: view,
    })),
}));

export default useStore;
