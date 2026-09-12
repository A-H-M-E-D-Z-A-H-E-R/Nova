export default function About() {
  return (
    <main className="px-6 pt-36 pb-20">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold">About Nova:</h1>

        <hr className="my-10 border-[var(--nova-border)]" />

        <div>
          <h2 className="text-3xl font-bold">Our Story</h2>

          <p className="mt-6 text-[var(--nova-text-secondary)]">
            Nova was created with one goal in mind: making technology simple,
            modern, and accessible for everyone.
          </p>

          <p className="mt-4 text-[var(--nova-text-secondary)]">
            We believe that great products should combine performance, design,
            and reliability. That's why we carefully select products that
            deliver real value and a premium experience.
          </p>
        </div>

        <hr className="my-10 border-[var(--nova-border)]" />

        <div>
          <h2 className="text-3xl font-bold">Our Mission</h2>

          <p className="mt-6 text-[var(--nova-text-secondary)]">
            Our mission is to provide high-quality technology products with a
            smooth and trustworthy shopping experience.
          </p>
        </div>

        <hr className="my-10 border-[var(--nova-border)]" />

        <div>
          <h2 className="text-3xl font-bold">Why Choose Nova?</h2>

          <ul className="mt-6 space-y-4 text-[var(--nova-text-secondary)]">
            <li>Carefully selected products 👌🏻</li>
            <li>Secure shopping experience 🔐</li>
            <li>Fast customer support ⚡</li>
            <li>Modern and user-friendly design 🎨</li>
          </ul>
        </div>

        <hr className="my-10 border-[var(--nova-border)]" />

        <div>
          <h2 className="text-3xl font-bold">Our Vision</h2>

          <p className="mt-6 text-[var(--nova-text-secondary)]">
            We aim to build a modern technology store that customers can trust
            and enjoy using every day.
          </p>

          <hr className="my-10 border-[var(--nova-border)]" />

          <h3 className="text-2xl font-bold">
            Thank you for choosing Nova ❤️.
          </h3>
        </div>
      </section>
    </main>
  );
}