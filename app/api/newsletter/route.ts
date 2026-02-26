import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);

    const existing = await db.newsletterSubscriber.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      return NextResponse.json({ message: "Already subscribed" });
    }

    await db.newsletterSubscriber.create({
      data,
    });

    return NextResponse.json({ message: "Subscribed" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 400 }
    );
  }
}
