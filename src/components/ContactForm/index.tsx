"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import FormButton from "./FormButton";
import { useState } from "react";

import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);

  const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }).min(3, {
      message: "Email must be at least 3 characters",
    }),
    title: z
      .string()
      .min(3, { message: "Title must be at least 3 characters" }),
    message: z
      .string()
      .min(3, { message: "Message must be at least 3 characters" }),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
  });
  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof schema>) {
    setIsPending(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    if (data) {
      toast({
        variant: "success",
        title: "Message sent",
        description: "We will reply to you as soon as possible.",
      });
      // Empties the title and message but keeps the name and email
      form.reset({
        name: data.name,
        email: data.email,
        title: "",
        message: "",
      });
    }

    setIsPending(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-card py-20 px-8  rounded-md shadow-lg flex flex-col gap-6 max-w-xl mx-auto border"
      >
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
              <FormDescription>First and last name</FormDescription>
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email"
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Title"
                  className="bg-background"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Message"
                  className="bg-background"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormButton isPending={isPending} />
      </form>
    </Form>
  );
}
