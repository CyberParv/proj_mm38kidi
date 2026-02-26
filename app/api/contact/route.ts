import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    await db.contactMessage.create({
      data,
    });

    return NextResponse.json(
      { message: "Message received" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit contact message" },
      { status: 400 }
    );
  }
}
