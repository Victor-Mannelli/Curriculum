import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInsetHeader } from "@/components/sidebar-inset-header";
import { alkalami, roboto_regular, roboto_bold } from "@/utils/fonts";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QCProvider } from "@/providers/queryClientProvider";
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curriculum",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${alkalami.variable} ${roboto_regular.variable} ${roboto_bold.variable} antialiased`}
      >
        <QCProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <SidebarInsetHeader />
                <main className="w-full min-h-[calc(100vh-9rem)]">
                  {children}
                </main>
              </SidebarInset>
            </SidebarProvider>
          </ThemeProvider>
          <ReactQueryDevtools />
        </QCProvider>
      </body>
    </html >
  );
}