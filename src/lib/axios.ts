import axios from "axios";
const URL = process.env.BACKEND_URL;
if (!URL) throw new Error("BACKEND_URL is not defined");
const instance = axios.create({
  baseURL: URL,
});
export default instance;
