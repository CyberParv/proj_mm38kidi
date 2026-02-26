import { cookies } from "next/headers";
import { cartAddSchema, cartUpdateSchema } from "./validators";

export type CartItem = {
  id: string;
  productId: string;
  size: string;
  color: string;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
};

const CART_COOKIE = "urban_threads_cart";
const MAX_AGE = 60 * 60 * 24 * 7;

const safeParseCart = (value: string | undefined): Cart => {
  if (!value) return { items: [] };
  try {
    const parsed = JSON.parse(value) as Cart;
    if (!parsed || !Array.isArray(parsed.items)) return { items: [] };
    return parsed;
  } catch {
    return { items: [] };
  }
};

const writeCart = (cart: Cart) => {
  const store = cookies();
  store.set(CART_COOKIE, JSON.stringify(cart), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
};

export const getCart = (): Cart => {
  const store = cookies();
  return safeParseCart(store.get(CART_COOKIE)?.value);
};

export const addToCart = (input: unknown): Cart => {
  const data = cartAddSchema.parse(input);
  const cart = getCart();
  const existing = cart.items.find(
    (item) =>
      item.productId === data.productId &&
      item.size === data.size &&
      item.color === data.color
  );

  if (existing) {
    existing.quantity = Math.min(existing.quantity + data.quantity, 20);
  } else {
    cart.items.push({
      id: crypto.randomUUID(),
      productId: data.productId,
      size: data.size,
      color: data.color,
      quantity: data.quantity,
    });
  }

  writeCart(cart);
  return cart;
};

export const updateCartItem = (itemId: string, input: unknown): Cart => {
  const data = cartUpdateSchema.parse(input);
  const cart = getCart();
  const item = cart.items.find((i) => i.id === itemId);
  if (!item) {
    return cart;
  }
  item.quantity = data.quantity;
  writeCart(cart);
  return cart;
};

export const removeCartItem = (itemId: string): Cart => {
  const cart = getCart();
  cart.items = cart.items.filter((item) => item.id !== itemId);
  writeCart(cart);
  return cart;
};
