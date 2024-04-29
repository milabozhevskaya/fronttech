import type { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import type { ServicePayload, ServiceQuery } from "../types";

const useService = <T>(
  key: string,
  fetchFn: (query: ServiceQuery<T>) => Promise<AxiosResponse<T>>,
  query: ServiceQuery<T>,
  enabled: boolean,
  id: string
): ServicePayload<T> => {
  const { isLoading, isFetching, error, data } = useQuery<AxiosResponse<T>>({
    queryKey: [key, id],
    queryFn: async () => fetchFn(query),
    retry: false,
    enabled,
  });

  return {
    isLoading,
    isFetching,
    error: error && error.message,
    data: (data && data.data) || undefined,
  };
};

export { useService };
