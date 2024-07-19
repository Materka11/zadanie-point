export const fetchApi = async (endpoints: string, options?: RequestInit) => {
  const headers = {
    "Content-Type": "aplication/json",
  };

  const response = fetch(endpoints, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });

  return response;
};
