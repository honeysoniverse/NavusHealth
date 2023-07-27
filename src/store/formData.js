import create from 'zustand';
import vanillaCreate from 'zustand/vanilla';

const initialFormState = {
  email: '',
  emailVerified: false,
  phone: '',
  phoneVerified: false,
  data: {},
  filesToUpload: {},
  address: {
    streetAddress: '',
    state: '',
    city: '',
    zip: '',
  },
  isConfirm: false,
  phoneMessage: '',
  noVerification: false,
  profileMessage: '',
};

export const formDataStore = vanillaCreate((setState, getState) => ({
  ...initialFormState,
  updateFormDataField: (valueId, value) => setState((state) => {
    const currentState = state.data;
    currentState[valueId] = value;
    return { data: currentState };
  }),
  updateUserProfileField: (valueId, value) => setState((state)=> {
    const currentState = state.data;
    currentState[valueId] = value;
    return { profileData: currentState };
  }),
  setEmail: (email) => setState(() => ({ email })),
  setEmailVerified: (emailVerified) => setState(() => ({ emailVerified })),
  setPhone: (phone) => setState(() => ({ phone })),
  setPhoneVerified: (phoneVerified) => setState(() => ({ phoneVerified })),
  setData: (newData) => setState((state) => ({ data: Object.assign(state.data, newData) })),
  setAddress: (address) => setState(() => ({ address })),
  addUploadFile: (valueId, file) =>
    setState((state) => {
      const currentState = state.filesToUpload;
      currentState[valueId] = file;
      return { filesToUpload: currentState };
    }),
  removeUploadFile: (valueId) =>
    setState((state) => {
      const currentState = state.filesToUpload;
      delete currentState[valueId];
      return { filesToUpload: currentState };
    }),
  getValues: () => getState(),
  setIsConfirm: (isConfirm) => setState(() => ({ isConfirm })),
  setPhoneMessage: (phoneMessage) => setState(() => ({ phoneMessage })),
  setProfileMessage: (profileMessage) => setState(() => ({ profileMessage })),
  setNoVerification: (noVerification) => setState(() => ({ noVerification })),

}));

export const useFormDataStore = create(formDataStore);
