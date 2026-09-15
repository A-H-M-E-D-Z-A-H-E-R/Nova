import ProductClient from "./ProductClient";
import products from "@/app/components/data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  return <ProductClient params={params} />;
}