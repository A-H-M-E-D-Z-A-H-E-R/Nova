import Image from "next/image";
import Link from "next/link";
type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[var(--nova-border)] bg-[var(--nova-glass)] p-[15px] shadow-[var(--nova-shadow)] backdrop-blur-[60px]">
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="mx-auto my-[10px] h-[300px] w-full object-contain"
        />
      </figure>

      <div>
        <h3 className="mx-[30px] mt-[35px] text-lg font-semibold">
          {product.name}
        </h3>

        <p className="mx-[20px] my-[20px] text-xs text-[var(--nova-text-secondary)]">
          Premium technology designed for you.
        </p>

        <h4 className="mx-[30px] mt-[35px] text-[var(--nova-text-muted)] transition duration-500 hover:text-white">
          {product.price}
        </h4>

        <div className="flex justify-end">
          <Link href={`/products/${product.id}`}>
            <button className="group relative h-12 w-40 rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300 mt-6  m-[10px] ">
              {" "}
              <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3] ">
                {" "}
                View Product{" "}
              </span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
