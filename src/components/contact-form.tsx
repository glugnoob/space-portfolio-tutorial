import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormLabel,
  FormItem,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name not long enough" }),
  email: z.string().email({ message: "Invalid Email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must be no more than 500 characters" }),
});

const userId = "EOPcGhqFEZII4kmHi";
const serviceId = "service_law4mr9";
const templateId = "template_kbur7qq";

emailjs.init(userId);

interface Props {
  handleFocus: () => void;
  handleBlur: () => void;
  handleSend: (callback?: () => void) => void;
}

const ContactForm = ({ handleBlur, handleFocus, handleSend }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // emailjs.send(serviceId, templateId, values, userId);
    handleSend(() => {
      toast("Email sent successfully");
      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10 text-white"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-lg font-medium">Name</FormLabel>
              <FormControl>
                <Input
                  className="py-6 font-medium"
                  placeholder="John Doe"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-lg font-medium">Email</FormLabel>
              <FormControl>
                <Input
                  className="py-6 font-medium"
                  placeholder="JohnDoe@example.com"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-lg font-medium">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="font-medium"
                  placeholder="Type your message here..."
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          size="lg"
          variant="secondary"
        >
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
