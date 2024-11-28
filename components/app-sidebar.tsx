"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FlaskConical, FolderGit2, Home, Mail, Phone, User } from "lucide-react"
import { IoLogoGithub, IoLogoLinkedin } from "@/lib/react-icons"
import { NavItems } from "@/components/nav-items"
import { ModeToggle } from "./toggle-theme"
import * as React from "react"
import Image from "next/image";

const data = {
  user: {
    name: "Victor Mannelli",
    email: "imp.mannelli@gmail.com",
    avatar: "/images/me.png",
  },
  pages: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About Me",
      url: "/about-me",
      icon: User,
    },
    {
      title: "Experiences",
      url: "/my-exp",
      icon: FlaskConical,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderGit2,
      // items: [
      //   {
      //     title: "History",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Contact Me",
      url: "/contact-me",
      icon: Mail,
    },
  ],
  socials: [
    {
      title: "Linked In",
      url: "https://www.linkedin.com/in/victor-mendes-mannelli",
      icon: IoLogoLinkedin,
      targetBlank: true
    },
    {
      title: "Github",
      url: "https://github.com/Victor-Mannelli",
      icon: IoLogoGithub,
      targetBlank: true
    },
    {
      title: "imp.mannelli@gmail.com",
      url: null,
      icon: Mail,
    },
    {
      title: "(21) 9 9779-0964",
      url: null,
      icon: Phone,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <Image src={"/images/logo.png"} alt="logo" className="h-fit w-12 rounded-md" width="1920" height="1080" />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Interactive Curriculum</span>
                  <span className="truncate text-xs"> Victor Mannelli </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavItems title="Pages" items={data.pages} />
        <NavItems title="Socials" items={data.socials} />
        <SidebarGroup>
          <SidebarGroupLabel> Settings </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <ModeToggle />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
