import { sendMail } from "../mailer";

export function sendContactMail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
    <hr />
    <p>Courtyard Valley Resort</p>
  `;

  return sendMail({
    to: process.env.VILLA_EMAIL!,
    cc: data.email,
    replyTo: data.email,
    subject: "📨 New Contact Enquiry - Courtyard Valley Resort",
    html,
  });
}
