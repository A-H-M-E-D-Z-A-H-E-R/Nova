"use client";

import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import products from "../components/data/products";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("novaUser");

    if (user) {
      setUsername(JSON.parse(user).username);
    }
  }, []);

  return (
    <main>
      <section
        className=" rounded-6xl /* Made with MeshSVG.com — https://meshsvg.com/svg-patterns/#1.eyJ2IjoxLCJtb2RlIjoicGF0dGVybiIsInNlZWQiOjEyMzQsInBhbGV0dGUiOlsiIzhiNWNmNiIsIiMyMmQzZWUiXSwicGFyYW1zIjp7ImZhbWlseSI6ImRvdHMiLCJzY2FsZSI6NjUsIndlaWdodCI6MC4wNSwiZmciOiIjNGQ0MzY1IiwiYmciOm51bGwsInBhdHRlcm5TZWVkIjoxMjM0LCJwcmVzZXQiOm51bGx9fQ */
        bg-[image:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2265%22%20height%3D%2265%22%20viewBox%3D%220%200%2065%2065%22%3E%3Ccircle%20cx%3D%2216.25%22%20cy%3D%2216.25%22%20r%3D%221.63%22%20fill%3D%22%234d4365%22%2F%3E%3Ccircle%20cx%3D%2248.75%22%20cy%3D%2248.75%22%20r%3D%221.63%22%20fill%3D%22%234d4365%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:65px_65px] p-[40px]   "
      >
        <h1 className="mt-33 flex justify-center text-2xl font-bold">
          Welcome, {username} 👋
        </h1>

        <h1 className="mt-10  text-5xl font-extrabold  flex justify-center">
          Technology, elevated.
        </h1>
        <p className=" mt-8  flex justify-center">
          Discover premium technology designed for the way you live.
        </p>
        <div className="hero-btns flex justify-center gap-6 mt-5">
          <a href="/products">
            <button className="group relative h-12 w-40 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300 mt-6 ">
              {" "}
              <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3] ">
                {" "}
                Shop Products{" "}
              </span>{" "}
            </button>
          </a>

          <a href="/products">
            <button className="btn mt-6 h-12 w-40 border-[var(--nova-border-light)] bg-transparent text-[var(--nova-text-secondary)] hover:bg-white/5 hover:text-white">
              Explore
            </button>
          </a>
        </div>
      </section>
      <section className="featured-products mx-[30px] grid grid-cols-1 gap-5 border-t border-[var(--nova-border)] pt-[30px] md:grid-cols-2 p-[6px]">
        <ProductCard product={products[1]} />
        <ProductCard product={products[3]} />
        <ProductCard product={products[5]} />
        <ProductCard product={products[6]} />
      </section>
      <section className="border-t border-[var(--nova-border)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Shop by category
          </h2>

          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <li>
              <a
                href="/products"
                className="flex h-28 items-center justify-center rounded-[25px] border border-[var(--nova-border)] bg-[var(--nova-glass)] text-[var(--nova-text-secondary)] shadow-[var(--nova-shadow)] backdrop-blur-[60px] transition duration-300 hover:-translate-y-1 hover:text-white"
              >
                Phones
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="flex h-28 items-center justify-center rounded-[25px] border border-[var(--nova-border)] bg-[var(--nova-glass)] text-[var(--nova-text-secondary)] shadow-[var(--nova-shadow)] backdrop-blur-[60px] transition duration-300 hover:-translate-y-1 hover:text-white"
              >
                Laptops
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="flex h-28 items-center justify-center rounded-[25px] border border-[var(--nova-border)] bg-[var(--nova-glass)] text-[var(--nova-text-secondary)] shadow-[var(--nova-shadow)] backdrop-blur-[60px] transition duration-300 hover:-translate-y-1 hover:text-white"
              >
                Audio
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="flex h-28 items-center justify-center rounded-[25px] border border-[var(--nova-border)] bg-[var(--nova-glass)] text-[var(--nova-text-secondary)] shadow-[var(--nova-shadow)] backdrop-blur-[60px] transition duration-300 hover:-translate-y-1 hover:text-white"
              >
                Wearables
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="flex h-28 items-center justify-center rounded-[25px] border border-[var(--nova-border)] bg-[var(--nova-glass)] text-[var(--nova-text-secondary)] shadow-[var(--nova-shadow)] backdrop-blur-[60px] transition duration-300 hover:-translate-y-1 hover:text-white"
              >
                Tablet
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
