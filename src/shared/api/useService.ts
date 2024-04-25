import { useEffect, useState } from "react";
import type { ServicePayload } from "../types";

const useService = <T>(
  fetch: ({ query }: { query: string }) => Promise<T>,
  { query = "" }: { query: string }
): ServicePayload<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (query.length === 0 && error) {
      setError(undefined);
      setData(null);
      return;
    }
    if (query.length === 0 && data) {
      setError(undefined);
      setData(null);
      return;
    }
    if (query.length === 0) {
      setError(undefined);
      setData(null);
      return;
    }
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      setError(undefined);
      try {
        const fetchedData = await fetch({ query });
        if (fetchedData instanceof Error) {
          throw fetchedData;
        }
        setData(fetchedData);
      } catch (e) {
        setError(e as Error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (!loading) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetch, query]);

  return {
    loading,
    error,
    data,
  };
};

export { useService };
