/* eslint-disable @next/next/no-img-element */
"use client";

import { ProfileForm } from "@/components/contact-me-form";
import React from "react";

export default function ContactMe() {
  return (
    <div className="flex flex-col 2xl:flex-row items-center justify-center gap-24 h-full px-5">
      <div className="flex flex-col w-[50rem]">
        <div className="flex flex-col gap-3">
          <h1> Contact me </h1>
          <p>
            I&apos;m have strong interest in technologies that directly impact users, such as web and software development, AI and virtual reality.
          </p>
          <p>
            I am seeking a software development opportunity in a company that values the flexibility of remote work and the potential for international collaboration. My priority is to work in a technology-focused environment that encourages innovation and values the contributions of its professionals, providing room for teamwork, learning, and continuous growth.
          </p>
          <p> If you liked my work I would love to receive a message!</p>
        </div>
        <ProfileForm />
      </div>
      <img className="hidden 2xl:block w-1/4" src="images/email.png" alt="" />
    </div>
  );
}
