"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import products from "@/app/components/data/products";

type CartItem = {
  id: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(Array.isArray(savedCart) ? savedCart : []);
    } catch {
      localStorage.removeItem("cart");
      setCart([]);
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const cartProducts = useMemo(() => {
    return cart
      .map((cartItem) => {
        const product = products.find((item) => item.id === cartItem.id);

        if (!product) return null;

        return {
          ...product,
          quantity: Math.min(Math.max(Number(cartItem.quantity) || 1, 1), 10),
        };
      })
      .filter(Boolean);
  }, [cart]);

  const priceToNumber = (price: string) => {
    return Number(price.replace(/[^0-9.-]+/g, "")) || 0;
  };

  const formatPrice = (value: number) => {
    return `$${value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  };

  const subtotal = useMemo(() => {
    return cartProducts.reduce((total, product) => {
      if (!product) return total;

      return total + priceToNumber(product.price) * product.quantity;
    }, 0);
  }, [cartProducts]);

  const shipping = 0;
  const service = 0;

  const total = Math.max(subtotal + shipping + service - discount, 0);

  const updateQuantity = (id: string, value: number) => {
    let quantity = Number(value);

    if (!Number.isFinite(quantity)) {
      quantity = 1;
    }

    quantity = Math.min(Math.max(Math.round(quantity), 1), 10);

    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item,
    );

    saveCart(newCart);
  };

  const removeProduct = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (!code) {
      setDiscount(0);
      return;
    }

    if (code === "NOVA10") {
      setDiscount(subtotal * 0.1);
      alert("Coupon applied: 10% off");
    } else {
      setDiscount(0);
      alert("Invalid coupon code.");
    }
  };

  const placeOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    setCart([]);
    setDiscount(0);

    form.reset();

    setCardNumber("");
    setCardName("");
    setExpiration("");
    setSecurityCode("");
    setPostalCode("");
  };

  return (
    <main className="w-full px-3 pt-36 pb-16 md:px-6">
      <section className="mx-auto w-full max-w-6xl rounded-[30px] border border-[var(--nova-border-strong)] p-4 md:p-7">
        <div className="mb-8 flex flex-wrap items-center gap-4 px-2">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">Your Cart</h1>

            <p className="mt-2 text-sm text-[var(--nova-text-secondary)]">
              Review your products and complete your order.
            </p>
          </div>
        </div>

        {cartProducts.length === 0 ? (
          <div className="rounded-[28px] border border-[var(--nova-border)] bg-[var(--nova-glass)] p-10 text-center shadow-[var(--nova-shadow)] backdrop-blur-[60px]">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>

            <p className="mt-3 text-[var(--nova-text-secondary)]">
              Add some products to your cart.
            </p>

            <Link
              href="/products"
              className="group relative mt-7 inline-flex h-12 w-48 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300"
            >
              <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                Continue Shopping
              </span>
            </Link>
          </div>
        ) : (
          <form onSubmit={placeOrder}>
            {/* Cart Products */}

            <fieldset className="rounded-[30px] border border-[var(--nova-border-strong)] p-4 md:p-7">
              <legend className="px-3 text-xl font-bold">Cart Products</legend>

              <div className="grid w-full grid-cols-1 gap-5">
                {cartProducts.map((product) => {
                  if (!product) return null;

                  return (
                    <article
                      key={product.id}
                      className="grid w-full grid-cols-1 items-center gap-5 rounded-[28px] border border-[var(--nova-border)] bg-[rgba(2,4,23,0.45)] p-4 shadow-[var(--nova-shadow)] md:grid-cols-[140px_minmax(0,1fr)] md:p-5"
                    >
                      <div className="mx-auto flex w-[110px] items-center justify-center rounded-[24px] border border-[var(--nova-border)] bg-[rgba(2,4,23,0.35)] p-4 shadow-[var(--nova-shadow)] md:mx-0 md:w-[120px]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={120}
                          height={120}
                          className="h-auto w-full object-contain"
                        />
                      </div>

                      <div className="flex min-w-0 flex-col gap-5 text-center md:text-left">
                        <h3 className="text-xl font-semibold">
                          {product.name}
                        </h3>

                        <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
                          <div className="flex flex-col gap-2">
                            <label
                              htmlFor={`quantity-${product.id}`}
                              className="text-sm text-[#d1d5db]"
                            >
                              Quantity
                            </label>

                            <input
                              id={`quantity-${product.id}`}
                              type="number"
                              min="1"
                              max="10"
                              value={product.quantity}
                              onChange={(event) =>
                                updateQuantity(
                                  product.id,
                                  Number(event.target.value),
                                )
                              }
                              className="w-40 rounded-xl border border-[var(--nova-border)] bg-[rgba(2,4,23,0.35)] px-3 py-3 text-[#d1d5db] outline-none shadow-[var(--nova-shadow)] focus:border-[var(--nova-border-light)]"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="text-sm text-[#d1d5db]">
                              Price
                            </span>

                            <span className="py-3 font-semibold text-[var(--nova-price)]">
                              {product.price}
                            </span>
                          </div>

                          {/* New Button */}

                          <button
                            type="button"
                            onClick={() => removeProduct(product.id)}
                            className="group relative h-12 w-full max-w-[240px] rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300"
                          >
                            <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </fieldset>

            {/* Payment */}

            <section className="mt-6 flex w-full flex-col gap-6">
              <div className="w-full rounded-[28px] border border-[var(--nova-border)] bg-[var(--nova-glass-soft)] p-5 shadow-[var(--nova-shadow)] backdrop-blur-[60px] md:p-7">
                <h2 className="text-2xl font-bold">Payment Information</h2>

                <p className="mt-2 text-[var(--nova-text-secondary)]">
                  Enter your payment details.
                </p>

                <div className="mt-7 grid gap-4">
                  <div>
                    <label
                      htmlFor="credit-number"
                      className="text-sm text-[#d5d5d5]"
                    >
                      Card Number
                    </label>

                    <input
                      id="credit-number"
                      maxLength={19}
                      required
                      pattern="[0-9\s]{13,19}"
                      value={cardNumber}
                      onChange={(event) => setCardNumber(event.target.value)}
                      placeholder="0000 0000 0000 0000"
                      className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none shadow-[var(--nova-shadow)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="credit-name"
                      className="text-sm text-[#d5d5d5]"
                    >
                      Cardholder Name
                    </label>

                    <input
                      id="credit-name"
                      required
                      maxLength={26}
                      value={cardName}
                      onChange={(event) => setCardName(event.target.value)}
                      placeholder="Nova"
                      className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none shadow-[var(--nova-shadow)]"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="expiration-date"
                        className="text-sm text-[#d5d5d5]"
                      >
                        Expiration
                      </label>

                      <input
                        id="expiration-date"
                        placeholder="01/23"
                        maxLength={5}
                        required
                        pattern="[0-9]{2}/[0-9]{2}"
                        value={expiration}
                        onChange={(event) => setExpiration(event.target.value)}
                        className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="security-code"
                        className="text-sm text-[#d5d5d5]"
                      >
                        CVV
                      </label>

                      <input
                        id="security-code"
                        required
                        inputMode="numeric"
                        pattern="[0-9]{3}"
                        maxLength={3}
                        value={securityCode}
                        onChange={(event) =>
                          setSecurityCode(event.target.value)
                        }
                        placeholder="123"
                        className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="postal-code"
                        className="text-sm text-[#d5d5d5]"
                      >
                        Postal Code
                      </label>

                      <input
                        inputMode="numeric"
                        pattern="[0-9]{5}"
                        id="postal-code"
                        required
                        maxLength={5}
                        value={postalCode}
                        onChange={(event) => setPostalCode(event.target.value)}
                        placeholder="12345"
                        className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Credit Card */}

              <div className="mx-auto w-full max-w-[330px] [perspective:1200px]">
                <div className="relative h-[210px] w-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                  {/* Front */}

                  <div className="absolute inset-0 rounded-[24px] border border-white/[0.18] bg-[linear-gradient(135deg,rgba(3,8,40,0.82),rgba(8,15,64,0.72),rgba(94,55,202,0.65))] p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] [backface-visibility:hidden]">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">NOVA</span>

                      <Image
                        src="/images/icons/EMV-chip.png"
                        alt="Chip"
                        height={30}
                        width={30}
                      />
                    </div>

                    <p className="mt-9 text-[1.05rem] font-semibold tracking-[2px]">
                      {cardNumber || "0000 0000 0000 0000"}
                    </p>

                    <div className="mt-7 flex justify-between">
                      <div>
                        <small className="block text-[0.65rem] opacity-75">
                          CARD HOLDER
                        </small>

                        <p className="text-sm font-semibold">
                          {cardName || "Nova"}
                        </p>
                      </div>

                      <div>
                        <small className="block text-[0.65rem] opacity-75">
                          EXPIRES
                        </small>

                        <p className="text-sm font-semibold">
                          {expiration || "08/28"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back */}

                  <div className="absolute inset-0 rounded-[24px] border border-white/[0.18] bg-[linear-gradient(135deg,rgba(3,8,40,0.82),rgba(15,20,80,0.74),rgba(208,54,200,0.56))] p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="mx-[-20px] mt-2 h-10 bg-black" />

                    <div className="mt-5 flex items-center justify-end gap-3">
                      <span className="text-xs opacity-80">CVV</span>

                      <span className="min-w-[70px] rounded-md bg-white px-3 py-2 text-center font-bold text-[#111]">
                        {securityCode || "123"}
                      </span>
                    </div>

                    <div className="mt-3 max-w-[86%] overflow-hidden">
                      <small className="block text-[0.45rem] opacity-70">
                        POSTAL CODE
                      </small>

                      <p className="truncate text-[0.55rem]">
                        {postalCode || "12345"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Order Summary */}

            <section className="mt-8 rounded-[30px] border border-[var(--nova-border)] bg-[rgba(2,4,23,0.35)] p-5 shadow-[var(--nova-shadow)] backdrop-blur-[60px] md:p-7">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <div className="mt-6 grid gap-5">
                <div>
                  <label htmlFor="coupon" className="text-sm text-[#d5d5d5]">
                    Coupon
                  </label>

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <input
                      id="coupon"
                      value={coupon}
                      onChange={(event) => setCoupon(event.target.value)}
                      placeholder="Enter coupon code"
                      className="min-w-0 flex-1 rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none"
                    />

                    {/* New Button */}

                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="group relative h-12 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300"
                    >
                      <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent px-5 transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                        Apply Coupon
                      </span>
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 border-t border-[var(--nova-border)] pt-5 text-[#d5d5d5]">
                  <div className="flex justify-between gap-4">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Service</span>
                    <span>{formatPrice(service)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between gap-4 text-green-400">
                      <span>Discount</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between gap-4 border-t border-[var(--nova-border)] pt-5 text-lg font-bold">
                    <span>Total</span>

                    <span className="text-[var(--nova-price)]">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                {/* Customer Information */}

                <div className="grid gap-4 border-t border-[var(--nova-border-strong)] pt-6">
                  <h3 className="text-xl font-bold">Customer Information</h3>

                  <div>
                    <label
                      htmlFor="cust-name"
                      className="text-sm text-[#d5d5d5]"
                    >
                      Name
                    </label>

                    <input
                      id="cust-name"
                      required
                      className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cust-address"
                      className="text-sm text-[#d5d5d5]"
                    >
                      Address
                    </label>

                    <input
                      id="cust-address"
                      required
                      className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cust-tel"
                      className="text-sm text-[#d5d5d5]"
                    >
                      Phone
                    </label>

                    <input
                      id="cust-tel"
                      type="tel"
                      required
                      className="mt-2 w-full rounded-[15px] border border-[var(--nova-border)] bg-white/[0.04] px-4 py-3 text-[#f3f4f6] outline-none"
                    />
                  </div>
                </div>

                {/* Actions */}

                <div className="flex flex-col gap-3 border-t border-[var(--nova-border)] pt-6 sm:flex-row">
                  {/* Place Order */}

                  <button
                    type="submit"
                    className="group relative h-12 flex-1 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300"
                  >
                    <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                      Place Order
                    </span>
                  </button>

                  {/* Reset */}

                  <button
                    type="reset"
                    onClick={() => {
                      setCoupon("");
                      setDiscount(0);
                      setCardNumber("");
                      setCardName("");
                      setExpiration("");
                      setSecurityCode("");
                      setPostalCode("");
                    }}
                    className="group relative h-12 flex-1 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300"
                  >
                    <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                      Reset
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </form>
        )}
      </section>
    </main>
  );
}
