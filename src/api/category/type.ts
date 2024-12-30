import { CategoryType } from "@/types/modules/FAQ";

export interface CategoryItem {
  categoryId: string;
  name: string;
}

export interface GetCategoriesParams {
  tab: CategoryType;
}

export interface GetCategoriesRs {
  pageInfo: {
    totalRecord: number;
  };
  items: CategoryItem[];
}
