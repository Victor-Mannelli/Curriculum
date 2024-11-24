"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as React from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function QCProvider({ children, ...props }: React.ComponentProps<any>) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient} {...props}>
      {children}
    </QueryClientProvider>
  )
}
