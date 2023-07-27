import { useQuery } from 'react-query';
import useFormsApi from '../../services/forms/forms';
import { useFormStore } from '../../store/form';
import { createYupSchemas } from '../../utils/createYupSchema';
import { buildPagesFromJson } from './utils';
import { inputComponents } from '../../components';
import { useUserFormSessionStore } from '../../store/userFormSession';

export const useFetchForm = ({ clientId = 'profile', eventId = 'page' }) => {
  // eslint-disable-next-line no-unused-vars
  const { getForm, getFormMock } = useFormsApi();
  const {
    setForm, form, setFormPages, formPages, setValidationSchemas,
  } = useFormStore();
  const { formPageIndex } = useUserFormSessionStore();

  const { isLoading } = useQuery('getFormQuery', () => getFormMock(clientId, eventId), {
    onSuccess: (resp) => {
      const { data } = resp;
      setForm(data);
      console.log(">>>>>>>>>>>>>>>>>>DATA FROM RESPONSE>>>>>>>>>>>>>>>>>>>>>>", data)
      const pages = buildPagesFromJson(data);
      console.log(">>>>>>>>>>>>>>PAGES FROM BUILDPAGESFROMJSON",pages);
      const schemas = createYupSchemas(pages, inputComponents);
      setValidationSchemas(schemas);
      setFormPages(pages);
      console.log(">>>>>>>>>>>>>>>>>>>formPages>>>>>>>>>>>>>>>>>>>>>>.",formPages)
    },
    onError: () => {

    },
  });

  return {
    isLoading,
    data: form,
    page: formPages[formPageIndex],
  };
};
