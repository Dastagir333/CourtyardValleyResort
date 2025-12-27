import { sendMail } from "../mailer";

export function sendBookingMail(data: {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}) {
  const html = `
    <h2>New Booking Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Check-In:</strong> ${data.checkIn}</p>
    <p><strong>Check-Out:</strong> ${data.checkOut}</p>
    <p><strong>Guests:</strong> ${data.guests}</p>
    <hr />
    <p>Courtyard Valley Resort</p>
  `;

  return sendMail({
    to: process.env.VILLA_EMAIL!, 
    cc: data.email,
    replyTo: data.email,
    subject: "📩 New Booking Request - Courtyard Valley Resort",
    html,
  });
}
