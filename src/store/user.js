import create from 'zustand';
import vanillaCreate from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { queryClient } from '../services';

const initialUserState = {
  oAuth: {},
  isAuthenticated: false,
  isEmailVerified: false,
  user: {},
};

export const userStore = vanillaCreate(persist((setState, getState) => ({
  ...initialUserState,
  setUser: (user) => setState(() => ({ user })),
  setOAuth: (oAuth) => setState(() => ({ oAuth })),
  setIsAuthenticated: (isAuthenticated) => setState(() => ({ isAuthenticated })),
  setIsEmailVerified: (isEmailVerified) => setState(() => ({ isEmailVerified })),
  getValues: () => getState(),
  handleLogout: () => {
    queryClient.clear();
    setState(initialUserState, true);
  },
}), {
  name: 'user_store',
}));

export const useUserStore = create(userStore);
