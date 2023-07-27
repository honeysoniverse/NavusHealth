import create from 'zustand';
import vanillaCreate from 'zustand/vanilla';

export const userFormSessionStore = vanillaCreate((setState, getState) => ({
  formPageIndex: 0,
  setFormPageIndex: (formPageIndex) => setState(() => ({ formPageIndex })),
  getValues: () => getState(),
}));

export const useUserFormSessionStore = create(userFormSessionStore);
