import { FAQItem } from "@/api/faq/type";
import s from "./FAQ.module.scss";
import { CategoryType } from "@/types/modules/FAQ";
import { useState } from "react";
import cn from "classnames";

interface Props extends FAQItem {
  categoryType: CategoryType;
}

export default function FAQ(props: Props) {
  const { categoryType, categoryName, subCategoryName, question } = props;
  const [isFold, setIsFold] = useState(true);
  return (
    <div
      className={cn(s.faq, isFold)}
      onClick={() => setIsFold((state) => !state)}
    >
      <div className={s.category}>{categoryName}</div>
      {categoryType === CategoryType.USAGE && (
        <div className={s.category}>{subCategoryName}</div>
      )}
      <div className={s.question}>{question}</div>
    </div>
  );
}
