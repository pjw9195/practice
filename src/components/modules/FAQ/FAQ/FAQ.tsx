import { FAQItem } from "@/api/faq/type";
import s from "./FAQ.module.scss";
import { CategoryType } from "@/types/modules/FAQ";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

interface Props extends FAQItem {
  categoryType: CategoryType;
}

export default function FAQ(props: Props) {
  const { categoryType, categoryName, subCategoryName, question, answer } =
    props;
  const [isFold, setIsFold] = useState(true);
  return (
    <div>
      <div
        className={cn(s.faq, { [s.unFold]: !isFold })}
        onClick={() => setIsFold((state) => !state)}
      >
        <div className={s.category}>{categoryName}</div>
        {categoryType === CategoryType.USAGE && (
          <div className={s.category}>{subCategoryName}</div>
        )}
        <div className={s.question}>{question}</div>
        <Image
          alt="fold_icon"
          src={
            "https://wiblebiz.kia.com/static/media/ic_arrow.4c20d689b2910e0a5bfd.svg"
          }
          className={cn(s.arrowIcon, { [s.unFold]: !isFold })}
          width={32}
          height={32}
        />
      </div>
      {!isFold && (
        <div
          className={s.answer}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}
