import { NextResponse } from "next/server";
import { sendContactMail } from "@/lib/mails/contactMail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await sendContactMail(body);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact mail error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
