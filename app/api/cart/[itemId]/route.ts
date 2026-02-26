import { NextResponse } from "next/server";
import { removeCartItem, updateCartItem } from "@/lib/cart";

type Params = {
  params: { itemId: string };
};

export async function PATCH(request: Request, { params }: Params) {
  try {
    const body = await request.json();
    const cart = updateCartItem(params.itemId, body);
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update cart item" },
      { status: 400 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    const cart = removeCartItem(params.itemId);
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to remove cart item" },
      { status: 500 }
    );
  }
}
