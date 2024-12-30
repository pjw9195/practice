import { CategoryType } from "@/types/modules/FAQ";

export interface FAQItem {
  answer: string;
  categoryName: string;
  id: number;
  question: string;
  subCategoryName: string;
  tab: CategoryType;
}

export interface GetFAQParams {
  tab: CategoryType;
  offset: number;
  question?: string;
}

export interface GetFAQRs {
  pageInfo: {
    totalRecord: number;
    offset: number;
  };
  items: FAQItem[];
}
