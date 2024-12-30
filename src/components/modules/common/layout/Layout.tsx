"use client";

import { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

type Props = PropsWithChildren;

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
