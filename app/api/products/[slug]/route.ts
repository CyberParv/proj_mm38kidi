import { NextResponse } from "next/server";
import { db } from "@/lib/db";

type Params = {
  params: { slug: string };
};

export async function GET(_request: Request, { params }: Params) {
  try {
    const product = await db.product.findUnique({
      where: { slug: params.slug },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const related = await db.product.findMany({
      where: {
        category: product.category,
        NOT: { id: product.id },
      },
      take: 4,
      orderBy: { createdAt: "desc" as const },
    });

    return NextResponse.json({ product, related });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
