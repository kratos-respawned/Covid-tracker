import instance from "./axios";
export const fetcher = async (url: string) => {
  const { data } = await instance.get(url);
  return data;
};
