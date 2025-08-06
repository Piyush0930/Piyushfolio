"use client";

import React, { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { saveMessage } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { MoveUpRight } from "lucide-react";

const initialState = {
  message: "",
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold group">
      {pending ? "Sending..." : "Send Message"}
      <MoveUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(saveMessage, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Oops!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">Get In Touch</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required />
            {state?.errors?.name && (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Your Email" required />
            {state?.errors?.email && (
              <p className="text-sm text-destructive">{state.errors.email[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
            />
            {state?.errors?.message && (
              <p className="text-sm text-destructive">{state.errors.message[0]}</p>
            )}
          </div>
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
