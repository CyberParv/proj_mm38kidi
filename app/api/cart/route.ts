import { NextResponse } from "next/server";
import { addToCart, getCart } from "@/lib/cart";

export async function GET() {
  try {
    const cart = getCart();
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load cart" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cart = addToCart(body);
    return NextResponse.json(cart, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 400 }
    );
  }
}
