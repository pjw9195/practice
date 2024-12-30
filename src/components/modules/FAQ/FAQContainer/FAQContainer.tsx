import s from "./FAQContainer.module.scss";
import FAQContents from "../FAQContents/FAQContents";
import FAQGuide from "../FAQGuide/FAQGuide";

export default function FAQContainer() {
  return (
    <div className={s.container}>
      <div className={s.titleWrap}>
        <div className={s.title}>자주 묻는 질문</div>
        <div className={s.description}>궁금하신 내용을 빠르게 찾아보세요.</div>
      </div>
      <FAQContents />
      <FAQGuide />
    </div>
  );
}
