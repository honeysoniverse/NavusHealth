import create from 'zustand';
import vanillaCreate from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

export const appStateStore = vanillaCreate(persist((setState, getState) => ({
  redirectFromAuth: null,
  setRedirectFromAuth: (redirectFromAuth) => setState(() => ({ redirectFromAuth })),
  getValues: () => getState(),
}), {
  name: 'app_state_store',
}));

export const useAppStateStore = create(appStateStore);
