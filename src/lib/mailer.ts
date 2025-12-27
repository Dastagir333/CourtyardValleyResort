// lib/mailer.ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type SendMailParams = {
  to: string;
  subject: string;
  cc:string;
  replyTo: string;
  html: string;
};

export async function sendMail({ to, cc, replyTo, subject, html }: SendMailParams) {
  await transporter.sendMail({
    from: `"Courtyard Valley Resort" <${process.env.SMTP_USER}>`,
    to,
    cc,
    replyTo,
    subject,
    html,
  });
}
