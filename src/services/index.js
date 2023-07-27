import { QueryClient } from 'react-query';
import { resourceTimeout } from './constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: resourceTimeout,
    },
  },
});
