import { useState } from 'react';
import { useQuery } from 'react-query';
import useFormsApi from '../../services/forms/forms';

export const useGetEvents = () => {
  const { getEvents } = useFormsApi();
  const [events, setEvents] = useState([]);
  const { isLoading } = useQuery('getEventsQuery', () => getEvents(), {
    onSuccess: async (data) => {
      setEvents(data.data);
    },
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    isLoading,
    events,
  };
};
