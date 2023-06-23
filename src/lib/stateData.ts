// import { WorldWideData } from "../../typings/worldwideData";
import instance from "./axios";

export const vaccineData = async () => {
  const { data } = await instance.get("vaccinationData");
  return data ;
};
