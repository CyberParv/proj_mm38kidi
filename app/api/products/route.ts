import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productFilterSchema } from "@/lib/validators";

const buildOrderBy = (sort?: string) => {
  switch (sort) {
    case "price-asc":
      return { price: "asc" as const };
    case "price-desc":
      return { price: "desc" as const };
    case "best-selling":
      return { createdAt: "asc" as const };
    case "newest":
    default:
      return { createdAt: "desc" as const };
  }
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = productFilterSchema.parse({
      category: searchParams.get("category") || undefined,
      size: searchParams.get("size") || undefined,
      color: searchParams.get("color") || undefined,
      minPrice: searchParams.get("minPrice") || undefined,
      maxPrice: searchParams.get("maxPrice") || undefined,
      sort: searchParams.get("sort") || undefined,
      page: searchParams.get("page") || undefined,
      limit: searchParams.get("limit") || undefined,
    });

    const where: Record<string, unknown> = {};
    if (params.category && params.category !== "all") {
      where.category = params.category;
    }
    if (params.minPrice !== undefined || params.maxPrice !== undefined) {
      where.price = {
        gte: params.minPrice ?? 0,
        lte: params.maxPrice ?? 1_000_000,
      };
    }
    if (params.size) {
      where.sizes = { contains: params.size };
    }
    if (params.color) {
      where.colors = { contains: params.color };
    }

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        orderBy: buildOrderBy(params.sort),
        skip: (params.page - 1) * params.limit,
        take: params.limit,
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      items,
      total,
      page: params.page,
      limit: params.limit,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
