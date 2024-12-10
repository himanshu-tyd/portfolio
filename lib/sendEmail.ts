"use server";

import { Resend } from "resend";
import { isValid } from "./utils";
import React from "react";
import EmailTemplate from "@/email/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("email");

  if (!isValid(senderEmail, 200)) {
    return {success:false , message: "Invalid sender email" };
  }

  if (!isValid(message, 500)) {
    return {success:false, message: "Invalid Message" };
  }

  const { data, error } = await resend.emails.send({
    from: "Contact Form<onboarding@resend.dev>",
    to: "code.himanshu93@gmail.com",
    replyTo: senderEmail as string,
    subject: "Message from contact form",
    text: message as string,
    react: React.createElement(EmailTemplate, {
      message: message as string,
      senderEmail: senderEmail as string,
    }),
  });

  if (error) {
    return {success:false , message: "Error while sending message", error: error.message };
  }

  if (!data) {
    return {success:false, message: "Failed to get sender data" };
  }

  return {
    success:true,
    message:
      "Message sent successfully. I will get back to you as soon as possible.",
  };
};
