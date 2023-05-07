import { WorldWideData } from "../../typings/worldwideData";
import instance from "./axios";

export const globalStats = async () => {
  const { data } = await instance.get("countryWise");
  return data as Promise<WorldWideData[]>;
};
