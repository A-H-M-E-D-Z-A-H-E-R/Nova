"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[var(--nova-border)] bg-[var(--nova-glass)] backdrop-blur-[60px]">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-6">
        <Link href="/">
          {" "}
          <Image
            src="/images/icons/nova~3.png"
            alt="Nova"
            width={90}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-xs md:flex">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="transition-colors duration-200 hover:text-white"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="transition-colors duration-200 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors duration-200 hover:text-white"
          >
            Contact
          </Link>

          <Link
            href="/cart"
            className="transition-colors duration-200 hover:text-white"
          >
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                isOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[var(--nova-border)] bg-[var(--nova-glass)] backdrop-blur-[60px] transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            Products
          </Link>

          <a
            href="/about"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            About
          </a>

          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            Contact
          </a>

          <a
            href="/cart"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
