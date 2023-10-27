"use server";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("senderEmail");

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }
  try {
    const data = await resend.sendEmail({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hazari.mayukh77@gmail.com",
      subject: "Message from contact form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
    return {
      data,
    };
  } catch (e: unknown) {
    return {
      error: getErrorMessage(e),
    };
  }
};
