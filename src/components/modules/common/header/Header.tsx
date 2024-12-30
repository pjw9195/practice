"use client";
import Image from "next/image";
import s from "./Header.module.scss";
import { usePathname } from "next/navigation";
import cn from "classnames";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={s.header}>
      <Image
        className={s.logo}
        alt="logo"
        src={
          "https://wiblebiz.kia.com/static/media/logo_wible_sm.99d79ce8fc4fb2326103.svg"
        }
        width={160}
        height={80}
      />
      <ul className={s.menuList}>
        <li className={cn(s.menu, { [s.selected]: pathname === "/Guide" })}>
          서비스 소개
        </li>
        <li className={cn(s.menu, { [s.selected]: pathname === "/FAQ" })}>
          자주 묻는 질문
        </li>
        <li className={cn(s.menu, { [s.selected]: pathname === "/News" })}>
          새소식
        </li>
        <li className={cn(s.menu, { [s.selected]: pathname === "/Counsel" })}>
          상담문의
        </li>
      </ul>
    </div>
  );
}
