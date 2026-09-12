"use client";
import React from "react";
import Image from "next/image";
import products from "@/app/components/data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  const [productId, setProductId] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then(({ id }) => {
      setProductId(id);
    });
  }, [params]);

  const product = products.find((item) => item.id === productId);

  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find(
      (item: { id: string; quantity: number }) =>
        item.id === product.id,
    );

    if (existingProduct) {
      existingProduct.quantity = Math.min(
        existingProduct.quantity + 1,
        10,
      );
    } else {
      cart.push({
        id: product.id,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </main>
    );
  }

  return (
    <main className="px-6 pt-36 pb-20">
      <section className="mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[30px] border border-[var(--nova-border)] bg-[var(--nova-glass)] p-6 shadow-[var(--nova-shadow)] backdrop-blur-[60px] md:grid-cols-2 md:p-10">

          <div className="flex min-h-[400px] items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="h-[400px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl font-semibold text-[var(--nova-price)]">
              {product.price}
            </p>

            <button
              onClick={addToCart}
              className="group relative mt-6 h-12 w-40 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300"
            >
              <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                Add To Cart
              </span>
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}