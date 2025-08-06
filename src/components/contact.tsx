"use client";

import React, { useEffect, useRef, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { saveMessage } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { MoveUpRight, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { userProfile, socialLinks } from "@/lib/data";
import Link from "next/link";

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

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Github,
};

export function Contact() {
  const [state, setState] = useState(initialState);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await saveMessage(null, formData);
      setState(result);
    });
  };

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Oops!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
        setState(initialState);
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-8 relative z-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">Get In Touch</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Connect with Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" />
                <a href={`mailto:${userProfile.email}`} className="hover:underline">
                  {userProfile.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent" />
                <span>{userProfile.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-accent" />
                <span>{userProfile.location}</span>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {socialLinks.map((profile) => {
                  const Icon = iconMap[profile.icon as string];
                  return Icon ? (
                    <Link
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon">
                        <Icon className="h-6 w-6" />
                      </Button>
                    </Link>
                  ) : null;
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <form ref={formRef} action={handleSubmit} className="space-y-6">
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
      </div>
    </section>
  );
}
