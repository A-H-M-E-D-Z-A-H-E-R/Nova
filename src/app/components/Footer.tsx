const Footer = () => {
  return (
    <footer className="clear-both overflow-hidden bg-[#020417] p-[60px] max-[680px]:p-[30px] max-[680px]:text-[0.7rem] border-t border-[var(--nova-border)]">
      <nav className="border-b border-[rgba(75,75,75,0.801)]">
        <ul className="mt-5 list-none p-5">
          <h5 className="text-[13px] font-normal text-white">Explore</h5>

          <li className="m-[10px]">
            <a
              href="/products"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              Phones
            </a>
          </li>

          <li className="m-[10px]">
            <a
              href="/products"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              Laptops
            </a>
          </li>

          <li className="m-[10px]">
            <a
              href="/products"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              Audio
            </a>
          </li>

          <li className="m-[10px]">
            <a
              href="/products"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              Wearables
            </a>
          </li>

          <li className="m-[10px]">
            <a
              href="/products"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              Tablet
            </a>
          </li>
        </ul>

        <ul className="mt-5 list-none p-5">
          <h5 className="text-[13px] font-normal text-white">Support</h5>

          <li className="m-[10px]">
            <a
              href="/contact"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              Contact us
            </a>
          </li>

          <li className="m-[10px]">
            <a
              href="mailto:#"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              mail :example@example.com
            </a>
          </li>

          <li className="m-[10px]">
            <a
              href="tel:#"
              className="text-xs text-[#d5d5d5] no-underline transition duration-500 hover:text-white"
            >
              Tel : +20 000 000 0000
            </a>
          </li>
        </ul>
      </nav>

      <hr className="border-[rgba(75,75,75,0.801)]" />

      <p className="float-left m-5 text-[#999999] max-[680px]:float-none max-[680px]:mx-3 max-[680px]:mb-5">
        Copyright © 2026{" "}
        <a href="/" className="no-underline">
          <strong className="text-white">Ahmed Zaher</strong>
        </a>{" "}
        All rights reserved.
      </p>

      <ul className="inline list-none max-[680px]:mt-[10px] max-[680px]:flex max-[680px]:flex-wrap max-[680px]:gap-x-3 max-[680px]:gap-y-[6px]">
        <li className="relative left-[225px] top-[15px] inline max-[680px]:static max-[680px]:block">
          <a
            href="#"
            className="m-[10px] text-[#c6c6c7] no-underline transition duration-500 hover:text-white"
          >
            Privacy Policy
          </a>
          |
        </li>

        <li className="relative left-[225px] top-[15px] inline max-[680px]:static max-[680px]:block">
          <a
            href="#"
            className="m-[10px] text-[#c6c6c7] no-underline transition duration-500 hover:text-white"
          >
            Terms of Service
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
