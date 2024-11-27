"use client"

import { Form, FormItem, FormLabel, FormField, FormControl, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Email is not valid", }),
  subject: z.string(),
  content: z.string(),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      content: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement; 

    emailjs
      .sendForm(
        "service_m8zqveq",
        "template_utz4ju7",
        form, // Pass the actual HTMLFormElement.
        "TuD9oztmKohwfiEZi"
      )
      .then(() => {
        console.log("message sent");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => onSubmit(e)} className="space-y-3 max-w-3xl mx-auto py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      type=""
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your best email"
                      type=""
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Subject </FormLabel>
              <FormControl>
                <Input
                  placeholder="What do you want to talk about?"
                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me what you have to say"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
