import { http, HttpResponse } from "msw";
import { CategoryType } from "@/types/modules/FAQ";
import { dataCategoryConsult, dataCategoryUsage } from "./data/category";
import { dataFAQ } from "./data/faq";
import { valid } from "@/util/valid";

export const handlers = [
  http.get("/api/category", async ({ request }) => {
    let data;
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");

    if (tab === CategoryType.CONSULT) {
      data = {
        pageInfo: {
          totalRecord: dataCategoryConsult.length,
        },
        items: dataCategoryConsult,
      };
    } else {
      data = {
        pageInfo: {
          totalRecord: dataCategoryUsage.length,
        },
        items: dataCategoryUsage,
      };
    }

    return HttpResponse.json(data);
  }),
  http.get("/api/faq", async ({ request }) => {
    let data = dataFAQ;
    let newData;

    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");
    const question = url.searchParams.get("question");
    const offset = Number(url.searchParams.get("offset"));
    const faqCategoryName = url.searchParams.get("faqCategoryName");

    if (tab) {
      data = dataFAQ.filter((data) => {
        return data.tab === tab;
      });
    }

    if (faqCategoryName) {
      if (tab === CategoryType.USAGE) {
        data = data.filter((data) => {
          return data.categoryName.includes(faqCategoryName as string);
        });
      }

      if (tab === CategoryType.CONSULT) {
        data = data.filter((data) => {
          return data.subCategoryName.includes(faqCategoryName as string);
        });
      }
    }

    if (question) {
      data = data.filter((data) => {
        return data.answer.includes(question as string);
      });
    }

    if (valid(offset) && typeof offset === "number") {
      newData = data.slice(offset * 10, (offset + 1) * 10);
    }

    const result = {
      pageInfo: {
        totalRecord: data.length,
        offset: offset,
      },
      items: newData,
    };

    return HttpResponse.json(result);
  }),
];
