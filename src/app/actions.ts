"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";
import { userProfile } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function saveMessage(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    // Save to Firestore
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: userProfile.email,
        subject: `New message from ${name} on your portfolio`,
        html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p>
               <p>${message}</p>`,
      });
    }

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (e) {
    console.error("Error adding document or sending email: ", e);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
