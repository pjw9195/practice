"use client";
import Image from "next/image";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div>
        <Image
          src="https://wiblebiz.kia.com/static/media/logo_kia.5deccfef5e3772b2d594.svg"
          alt="logo"
          width={186}
          height={56}
        />
        <div
          className={s.copyGray}
        >{`© 2023 KIA CORP.\nAll Rights Reserved.`}</div>
      </div>
      <div className={s.rightArea}>
        <div className={s.copyWhite}>
          <div>개인정보 처리방침</div>
          <div>이용약관</div>
        </div>
        <div
          className={s.copyGray}
        >{`서울특별시 서초구 헌릉로 12 기아㈜ 대표: 송호성, 최준영 사업자등록번호:
      119-81-02316 통신판매번호: 2006-07935\n고객센터: 1833-4964 제휴문의:
      wible.biz@kia.com`}</div>
      </div>
    </div>
  );
}
