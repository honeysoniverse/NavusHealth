import create from 'zustand';
import vanillaCreate from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

export const formStore = vanillaCreate(persist((setState, getState) => ({
  form: {},
  formPages: [],
  validationSchemas: [],
  setForm: (form) => setState(() => ({ form })),
  setFormPages: (formPages) => setState(() => ({ formPages })),
  setValidationSchemas: (validationSchemas) => setState(() => ({ validationSchemas })),
  getValues: () => getState(),
}), {
  name: 'form_store',
}));

export const useFormStore = create(formStore);
