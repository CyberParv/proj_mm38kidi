import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { searchSchema } from "@/lib/validators";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = searchSchema.parse({
      q: searchParams.get("q") || "",
      limit: searchParams.get("limit") || undefined,
    });

    const items = await db.product.findMany({
      where: {
        OR: [
          { name: { contains: params.q } },
          { description: { contains: params.q } },
          { category: { contains: params.q } },
        ],
      },
      take: params.limit,
      orderBy: { createdAt: "desc" as const },
    });

    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json({ error: "Failed to search" }, { status: 500 });
  }
}
