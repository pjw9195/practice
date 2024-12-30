import axios from "axios";
import { GetFAQParams, GetFAQRs } from "./type";

export const getFAQ = (params: GetFAQParams) => {
  return axios.get<GetFAQRs>("/api/faq", { params });
};
