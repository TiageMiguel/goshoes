import useSWR from 'swr';

import api from '../services';

export function useFetch<Data = any, Error = any>(url: string) {
  const response = useSWR<Data, Error>(url, async url => {
    const { data } = await api.get(url);

    return data;
  });

  return response;
}
