import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { queryClient } from './services';
import RoutesWrapper from './components/RoutesWrapper/RoutesWrapper';
import PageLayout from './components/PageLayout/PageLayout';
import theme from './theme';
import { useFormStore } from './store/form';
import { useUserFormSessionStore } from './store/userFormSession';

/**
 * @TODO Suspense fallback still to decide
 *
 */
const App = () => {
  const { validationSchemas } = useFormStore();
  const { formPageIndex } = useUserFormSessionStore();
  const formMethods = useForm({ defaultValues: [], resolver: yupResolver(validationSchemas[formPageIndex]) });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <FormProvider {...formMethods}>
          <ChakraProvider theme={theme}>
            <PageLayout>
              <RoutesWrapper />
            </PageLayout>
          </ChakraProvider>
        </FormProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
