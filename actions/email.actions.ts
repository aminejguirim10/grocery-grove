"use server";

import { newsLetterTemplate } from "@/lib/email";
import nodemailer from "nodemailer";

export const sendMail = async (email: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_AUTHOR_MAIL!,
        pass: process.env.NODE_MAILER_SECRET!,
      },
    });
    const mailOptions = {
      from: process.env.NODE_MAILER_AUTHOR_MAIL!,
      to: email,
      subject: "Added to the Newsletter",
      html: newsLetterTemplate(email),
    };
    await transporter.sendMail(mailOptions);
    return { message: "Email sent", status: 200 };
  } catch (error: any) {
    return { message: error.message, status: 400 };
  }
};
