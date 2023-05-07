import instance from "./axios";
export const fetchNews = async () => {
  const { data } = await instance.get("news");
  return data;
};
