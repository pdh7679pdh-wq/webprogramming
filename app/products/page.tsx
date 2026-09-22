import Link from "next/link";
import { getProducts } from "@/lib/products";
import { ProductForm } from "@/components/ProductForm";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <ProductForm />
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
