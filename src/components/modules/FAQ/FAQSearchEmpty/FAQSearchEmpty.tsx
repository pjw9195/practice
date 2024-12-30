import Image from "next/image";
import s from "./FAQSearchEmpty.module.scss";

export default function FAQSearchEmpty() {
  return (
    <div className={s.empty}>
      <Image
        alt="info"
        src="https://wiblebiz.kia.com/static/media/ic_nodata.ad8c6277d10ac0b69202.svg"
        width={56}
        height={56}
      />
      <div>검색결과가 없습니다.</div>
    </div>
  );
}
