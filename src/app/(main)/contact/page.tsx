"use client";

export default function Contact() {
  return (
<main className="w-full px-4 pt-28 pb-10 md:px-6 md:pt-36 md:pb-20">
  <section className="mx-auto w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold">Contact us</h1>

        <form className="mt-10">
          <fieldset className="rounded-3xl border border-[var(--nova-border)] bg-[var(--nova-glass)] p-8 shadow-[var(--nova-shadow)] backdrop-blur-[60px]">
            <label htmlFor="name" className="text-sm font-semibold">
              Your name:
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name..."
              required
              className="mt-3 w-full rounded-xl border border-[var(--nova-border-light)] bg-[var(--nova-input)] px-4 py-3 outline-none transition focus:border-[var(--nova-border-strong)]"
            />

            <label htmlFor="email" className="mt-6 block text-sm font-semibold">
              Your mail:
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your mail..."
              required
              className="mt-3 w-full rounded-xl border border-[var(--nova-border-light)] bg-[var(--nova-input)] px-4 py-3 outline-none transition focus:border-[var(--nova-border-strong)]"
            />

            <label
              htmlFor="message"
              className="mt-6 block text-sm font-semibold"
            >
              Your message:
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Enter your comment..."
              required
              className="mt-3 min-h-40 w-full resize-y rounded-xl border border-[var(--nova-border-light)] bg-[var(--nova-input)] px-4 py-3 outline-none transition focus:border-[var(--nova-border-strong)]"
            />

            <div className="mt-6 flex gap-4">
              <button
                type="submit"
                className="group relative h-12 w-32 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white"
              >
                <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                  Submit
                </span>
              </button>

              <button
                type="reset"
                className="btn h-12 w-32 border-[var(--nova-border-light)] bg-transparent text-[var(--nova-text-secondary)] hover:bg-white/5 hover:text-white"
              >
                Reset
              </button>
            </div>
          </fieldset>
        </form>

        <hr className="my-12 border-[var(--nova-border)]" />

        <section>
          <h2 className="text-3xl font-bold">Contact Info</h2>

          <p className="mt-6 text-[var(--nova-text-secondary)]">
            Email:{" "}
            <a href="mailto:example@example.com">
              <strong className="text-[var(--nova-text)]">
                example@example.com
              </strong>
            </a>
          </p>

          <p className="mt-4 text-[var(--nova-text-secondary)]">
            Phone:{" "}
            <a href="tel:+20 000 000 0000">
              {" "}
              <strong className="text-[var(--nova-text)]">
                +20 000 000 0000
              </strong>
            </a>
          </p>
        </section>
      </section>
    </main>
  );
}
