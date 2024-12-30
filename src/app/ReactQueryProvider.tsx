"use client";

import { useState } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({
  children,
}: React.PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false, // 컴포넌트가 마운트될 때 다시 요청하지 않음
            refetchOnWindowFocus: false, // 윈도우 포커스 시 요청하지 않음
            retry: false, // 실패 시 재요청 방지
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
