import axios from "axios";
import { GetCategoriesParams, GetCategoriesRs } from "./type";

export const getCategories = (params: GetCategoriesParams) => {
  return axios.get<GetCategoriesRs>("/api/category", { params });
};
