import s from "./FAQContents.module.scss";
import { useCallback, useMemo, useState } from "react";
import { CategoryType } from "@/types/modules/FAQ";
import cn from "classnames";
import { getCategories } from "@/api/category/api";
import { useInfiniteQuery, useQuery } from "react-query";
import { getFAQ } from "@/api/faq/api";
import { validWithEmptyText } from "@/util/valid";
import { flatten } from "@/util/func";
import FAQ from "../FAQ/FAQ";

const DefaultFAQCategory = {
  categoryId: "ALL",
  name: "전체",
};

export default function FAQContents() {
  const [categoryType, setCategoryType] = useState(CategoryType.CONSULT);
  const [search, setSearch] = useState<string>("");
  const [submitSearch, setSubmitSearch] = useState<string>("");
  const [selectFAQCategoryName, setSelectFAQCategoryName] =
    useState<string>("전체");

  const { data: categoryData } = useQuery({
    queryKey: ["getCategory", categoryType],
    queryFn: () => getCategories({ tab: categoryType }),
  });

  const faqCategoryList = useMemo(() => {
    if (categoryData?.data.items) {
      return [DefaultFAQCategory, ...categoryData.data.items];
    }
    return [DefaultFAQCategory];
  }, [categoryData?.data.items]);

  const {
    data: faqData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["getFAQ", categoryType, submitSearch, selectFAQCategoryName],
    queryFn: () =>
      getFAQ({
        question: validWithEmptyText(submitSearch) ? submitSearch : undefined,
        tab: categoryType,
        faqCategoryName:
          selectFAQCategoryName === "전체" ? undefined : selectFAQCategoryName,
        offset: 0,
      }),
    getNextPageParam: (lastPage) => ({
      ...lastPage.request,
      offset: lastPage.data.pageInfo.offset + 1,
    }),
  });

  const faqList = useMemo(
    () =>
      flatten(
        faqData?.pages ? faqData.pages?.map((page) => page.data.items) : []
      ),
    [faqData?.pages]
  );

  const onSearchValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const onFaqCategoryClick = useCallback((categoryName: string) => {
    setSelectFAQCategoryName(categoryName);
  }, []);

  const onSearch = useCallback(() => {
    setSubmitSearch(search);
  }, [search]);

  const onMoreClick = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  const handleCategory = useCallback((categoryType: CategoryType) => {
    setCategoryType(categoryType);
    setSubmitSearch("");
    setSearch("");
    setSelectFAQCategoryName("전체");
  }, []);

  return (
    <div className={s.contents}>
      <div className={s.categoryWrap}>
        <div
          className={cn(s.categoryConsult, {
            [s.selected]: categoryType === CategoryType.CONSULT,
          })}
          onClick={() => handleCategory(CategoryType.CONSULT)}
        >
          서비스 도입
        </div>
        <div
          className={cn(s.categoryUsage, {
            [s.selected]: categoryType === CategoryType.USAGE,
          })}
          onClick={() => handleCategory(CategoryType.USAGE)}
        >
          서비스 이용
        </div>
      </div>
      <div className={s.inputWrap}>
        <input
          placeholder="찾으시는 내용을 입력해 주세요"
          className={s.search}
          value={search}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          onChange={onSearchValueChange}
        />
      </div>
      {validWithEmptyText(submitSearch) && (
        <div className={s.searchText}>
          검색결과 총 <span className={s.searchCount}></span>건
        </div>
      )}

      <div className={s.faqCategoryList}>
        {faqCategoryList.map((category) => (
          <label
            key={category.categoryId}
            className={cn(s.faqCategoryItem, {
              [s.selected]: selectFAQCategoryName === category.name,
            })}
            onClick={() => onFaqCategoryClick(category.name)}
          >
            {category.name}
          </label>
        ))}
      </div>
      <div className={s.faqList}>
        {faqList.map((faq) => (
          <FAQ key={faq.id} {...faq} categoryType={categoryType} />
        ))}
      </div>
      {faqData?.pages[0] &&
        faqData?.pages[0].data.pageInfo.totalRecord > faqList.length && (
          <button className={s.moreBtn} onClick={onMoreClick}>
            +더보기
          </button>
        )}
    </div>
  );
}
