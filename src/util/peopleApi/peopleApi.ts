import { people } from "../endpoints";
import { fetchApi } from "../fetchApi";

export const getPeople = async () => {
  const response = await fetchApi(people, {
    method: "GET",
  });

  if (!response.ok) {
    console.error(response.status);
  }

  return response.json();
};
