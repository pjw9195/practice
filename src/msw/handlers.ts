import { http, HttpResponse } from "msw";
import { CategoryType } from "@/types/modules/FAQ";
import { dataCategoryConsult, dataCategoryUsage } from "./data/category";
import { dataFAQ } from "./data/faq";

export const handlers = [
  http.get("/api/category", async ({ params }) => {
    let data;
    if (params.tab === CategoryType.CONSULT) {
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
  http.get("/api/faq", async ({ params }) => {
    let data = dataFAQ;
    let newData;
    if (!params.tab) {
      data = dataFAQ.filter((data) => {
        return data.tab === params.tab;
      });
    }

    if (params.question) {
      data = dataFAQ.filter((data) => {
        return data.answer.includes(params.question as string);
      });
    }

    if (params.offset && typeof params.offset === "number") {
      newData = data.slice(params.offset * 10, (params.offset + 1) * 10 - 1);
    }

    const result = {
      pageInfo: {
        totalRecord: data.length,
        offset: params.offset,
      },
      data: newData,
    };

    return HttpResponse.json(result);
  }),
];
