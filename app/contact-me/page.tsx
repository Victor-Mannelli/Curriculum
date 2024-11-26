"use client";

import { ContactMeFormDataType } from "@/utils";
import { useRef, useState } from "react";
import React from "react";
// import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef(null);
  const [formData, setFormData] = useState<ContactMeFormDataType>({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (form.current) {
      // emailjs
      // 	.sendForm(
      // 		"service_m8zqveq",
      // 		"template_utz4ju7",
      // 		form.current,
      // 		"TuD9oztmKohwfiEZi"
      // 	)
      // 	.then(() =>
      // 		// toast.success("message sent", {
      // 		// 	position: "top-center",
      // 		// 	theme: "dark",
      // 		// })
      //     console.log("message sent")
      // 	);
    }
  }

  return (
    <div className="flex flex-col 2xl:flex-row items-center gap-5 h-full px-5">
      <div className="flex flex-col gap-5">
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
        <form className="flex flex-col gap-2" ref={form} onSubmit={handleFormSubmit}>
          <div className="flex sm:flex-row flex-col gap-2">
            <input
              required
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              className="h-12 w-full rounded-md p-3 placeholder:text-gray-400"
            />
            <input
              required
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className="h-12 w-full rounded-md p-3 placeholder:text-gray-400"
            />
          </div>
          <input
            required
            placeholder="Subject"
            type="text"
            name="subject"
            onChange={handleInputChange}
            value={formData.subject}
            className="h-12 w-full rounded-md p-3 placeholder:text-gray-400"
          />
          <textarea
            required
            cols={15}
            placeholder="Content"
            name="content"
            onChange={handleInputChange}
            value={formData.content}
            className="h-[20vh] w-full rounded-md p-3 placeholder:text-gray-400 border-none resize-none outline-none font-roboto "
          />
          <button className="h-12 w-full bg-[#fafafa] dark:bg-[#121212] rounded-md hover:brightness-125" type="submit"> Submit </button>
        </form>
      </div>
        <img className="w-1/4" src="images/email.png" alt="" />
    </div>
  );
}
