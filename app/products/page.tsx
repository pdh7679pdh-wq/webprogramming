import Link from "next/link";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 px-4 text-center">
      <span className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
        Server Component
      </span>

      <h1 className="text-3xl font-bold text-gray-800">상품 목록</h1>

      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white shadow-sm divide-y">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="block px-6 py-4 text-left hover:bg-gray-50"
          >
            <p className="font-medium text-gray-800">{p.name}</p>
            <p className="text-sm text-gray-500">좋아요 {p.likes}개</p>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="text-sm font-medium underline text-gray-900 hover:text-gray-600"
      >
        ← 홈으로 돌아가기
      </Link>
    </main>
  );
}