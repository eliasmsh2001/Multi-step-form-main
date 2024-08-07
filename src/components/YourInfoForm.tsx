import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "This field is required.",
  }),
  email: z.string().email({ message: "This field is required." }).min(2),
  phoneNumber: z.string().min(8, {
    message: "This field is required.",
  }),
});

export function YourInfoFrom() {
  const navigate = useNavigate();
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    navigate("?mode=select-plan");
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full md:w-[50vw] xl:w-[80vh] flex flex-col gap-4 md:gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-marine_blue font-semibold">
                  Name
                </FormLabel>
                <FormMessage className="text-strawberry_red" />
              </div>
              <FormControl>
                <Input
                  className="font-bold text-marine_blue"
                  placeholder="e.g. Stephen King"
                  {...field}
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-marine_blue font-semibold">
                  Email Address
                </FormLabel>
                <FormMessage className="text-strawberry_red" />
              </div>
              <FormControl>
                <Input
                  className="font-bold text-marine_blue"
                  placeholder="e.g. stephenKing@lorem.com"
                  {...field}
                  type="email"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-marine_blue font-semibold">
                  Phone Number
                </FormLabel>
                <FormMessage className="text-strawberry_red" />
              </div>
              <FormControl>
                <Input
                  className=" text-marine_blue font-bold"
                  placeholder="e.g. +1 234 567 890"
                  {...field}
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end items-center fixed bottom-0 left-0 p-2 md:p-0 md:relative bg-white md:bg-transparent">
          <Button
            type="submit"
            className="bg-marine_blue hover:bg-pastel_blue w-28 h-12 text-magnolia"
          >
            Next Step
          </Button>
        </div>
      </form>
    </Form>
  );
}
