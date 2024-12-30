"use client";
import { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren;
export default function MSWWrapper(props: Props) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const mswStart = async () => {
      if (
        process.env.NODE_ENV === "development" &&
        typeof window !== "undefined"
      ) {
        const { worker } = await import("../msw/browser");
        await worker.start();
        setStart(true);
      }
    };
    mswStart();
  }, []);
  const { children } = props;

  if (!start) {
    return <></>;
  }

  return <>{children}</>;
}
