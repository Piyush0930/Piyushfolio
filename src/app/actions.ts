"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
    const docRef = await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (e) {
    console.error("Error adding document: ", e);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
