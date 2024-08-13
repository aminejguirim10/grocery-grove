"use server"

import prisma from "@/lib/db"
import { newsLetterTemplate } from "@/lib/email"
import nodemailer from "nodemailer"

export const sendMail = async (email: string) => {
  try {
    const existtingEmail = await prisma.userWaitList.findUnique({
      where: {
        email,
      },
    })
    if (existtingEmail) {
      return { message: "Email already added", status: 400 }
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_AUTHOR_MAIL!,
        pass: process.env.NODE_MAILER_SECRET!,
      },
    })
    const mailOptions = {
      from: process.env.NODE_MAILER_AUTHOR_MAIL!,
      to: email,
      subject: "Added to the Newsletter",
      html: newsLetterTemplate(email),
    }
    await prisma.userWaitList.create({
      data: {
        email,
      },
    })
    await transporter.sendMail(mailOptions)
    return { message: "Email sent", status: 200 }
  } catch (error: any) {
    return { message: error.message, status: 400 }
  }
}
