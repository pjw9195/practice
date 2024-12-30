import { useCallback, useState } from "react";
import s from "./FAQContainer.module.scss";
import { CategoryType } from "@/types/modules/FAQ";
import cn from "classnames";
import { getCategories } from "@/api/category/api";
import { useQuery } from "react-query";

export default function FAQContainer() {
  const [categoryType, setCategoryType] = useState(CategoryType.CONSULT);
  const [search, setSearch] = useState<string>("");

  const { data } = useQuery({
    queryKey: [categoryType],
    queryFn: () => getCategories({ tab: categoryType }),
  });

  const onSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  return (
    <div className={s.container}>
      <div className={s.titleWrap}>
        <div className={s.title}>자주 묻는 질문</div>
        <div className={s.description}>궁금하신 내용을 빠르게 찾아보세요.</div>
      </div>
      <div className={s.categoryWrap}>
        <div
          className={cn(s.categoryConsult, {
            [s.selected]: categoryType === CategoryType.CONSULT,
          })}
          onClick={() => setCategoryType(CategoryType.CONSULT)}
        >
          서비스 도입
        </div>
        <div
          className={cn(s.categoryUsage, {
            [s.selected]: categoryType === CategoryType.USAGE,
          })}
          onClick={() => setCategoryType(CategoryType.USAGE)}
        >
          서비스 이용
        </div>
      </div>
      <div className={s.inputWrap}>
        <input
          placeholder="찾으시는 내용을 입력해 주세요"
          className={s.search}
          value={search}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}
