"use client";

import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbLink } from "./ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";
import { SidebarTrigger } from "./ui/sidebar";
import { titlesParser } from "@/utils";

export function SidebarInsetHeader() {
  const pathname = usePathname()
  const router = useRouter();
  return (
    <header className="flex sm:h-16 h-14 shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink onClick={() => router.back()}>
                Go Back
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            {pathname.split("/").slice(1).map((title, index) => (
              <div key={"title " + index}>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage>
                    {titlesParser[title]}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}