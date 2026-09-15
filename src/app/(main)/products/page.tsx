"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import products from "@/app/components/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <main className="px-4 pt-36 pb-20 md:px-6">
      <section className="products-page mx-auto max-w-7xl border-b border-[var(--nova-border)] pb-10">
        {/* Hero */}
        <section className="products-hero mx-1 rounded-[30px] border border-[var(--nova-border-light)] bg-[var(--nova-gradient-soft)] p-6 shadow-[0_10px_30px_rgba(5,10,62,0.25)] md:mx-5 md:p-8 bg-[linear-gradient(135deg,rgba(208,54,200,0.16),rgba(20,114,234,0.16))] ">
          <div className="max-w-[720px] ">
            <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1.5 text-[0.8rem] uppercase tracking-[0.2em] text-[#d7d9ff]">
              Nova collection
            </p>

            <h1 className="mb-3 text-[2.1rem] font-bold">All products</h1>

            <p className="leading-[1.6] text-[#d4d8f0]">
              Explore premium phones, laptops, audio, wearables, and tablets in
              one polished collection.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="search-panel mx-1 my-6 rounded-[24px] border border-white/[0.08] bg-[rgba(2,4,23,0.4)] p-[14px] shadow-[0_8px_20px_rgba(5,10,62,0.16)] md:mx-5 md:p-[18px_20px]">
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 min-w-0 flex-1 basis-[240px] rounded-full border border-white/[0.12] bg-[linear-gradient(135deg,rgba(208,54,200,0.16),rgba(20,114,234,0.16))] px-[14px] text-sm text-[#f3f4f6] outline-none placeholder:text-[#b9bfd8] focus:border-white/30 focus:shadow-[0_0_0_2px_rgba(208,54,200,0.25)]"
            />
          </div>
        </section>

        {/* Grid */}
        <section className="products-grid mx-1 mb-5 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] md:mx-5 ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex min-h-[440px] flex-col justify-start overflow-hidden rounded-[30px] border border-[var(--nova-border)] bg-[var(--nova-glass)] p-[18px_16px_8px] shadow-[var(--nova-shadow)] backdrop-blur-[60px] max-[680px]:min-h-0 max-[680px]:rounded-[22px]"
              >
                {/* Product image */}
                <div className="mb-[10px] flex h-[240px] items-center justify-center max-[680px]:h-[220px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="block h-full max-h-[220px] w-full max-w-[220px] object-contain p-[10px]"
                  />
                </div>

                {/* Product name */}
                <h3 className="mx-[20px] my-2 text-center text-lg font-semibold">
                  {product.name}
                </h3>

                {/* Price */}
                <h4 className="mx-[20px] my-2 text-center text-[var(--nova-text-muted)] transition duration-500 hover:cursor-pointer hover:text-white">
                  {product.price}
                </h4>

                {/* New button */}
                <div className="mt-auto flex justify-center pt-3">
                  <Link href={`/products/${product.id}`}>
                    <button className="group relative h-12 w-40 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white shadow-[0_6px_12px_-2px_rgba(29,33,57,0.467)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_16px_rgba(29,33,57,0.35)] mb-[15px]">
                      <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3] ">
                        View Product
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full py-20 text-center text-[var(--nova-text-muted)]">
              No products found.
            </p>
          )}
        </section>
      </section>
    </main>
  );
}
