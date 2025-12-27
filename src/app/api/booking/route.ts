import { NextResponse } from "next/server";
import { sendBookingMail } from "@/lib/mails/bookingMail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await sendBookingMail(body);

    return NextResponse.json(
      { success: true, message: "Booking request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking mail error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
