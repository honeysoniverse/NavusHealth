import create from 'zustand';
import vanillaCreate from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

const initialState = {
  registrations: [],
};

export const registrations = vanillaCreate(persist((setState, getState) => ({
  ...initialState,
  registrations: [],
  latestRegistration: '',
  addRegistration: (registration) => setState((state) => {
    const currentState = state.registrations;
    currentState.push(registration);
    return { registrations: currentState, latestRegistration: registration };
  }),
  getValues: () => getState(),
}), {
  name: 'registrations_store',
}));

export const useRegistrationsStore = create(registrations);
