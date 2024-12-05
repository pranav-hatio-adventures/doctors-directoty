import axios from "axios";
import { envConfig } from "../config/envConfig";

const customAxios = axios.create({
  baseURL: `${envConfig.AIRTABLE_BASE_URL}${envConfig.AIRTABLE_BASE_ID}`,
  headers: {
    Authorization: `Bearer ${envConfig.AIRTABLE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export { customAxios };
