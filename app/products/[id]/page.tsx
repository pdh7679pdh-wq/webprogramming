import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import { LikeButton } from "@/components/LikeButton";

type Props = { params: Promise<{ id: string }> };

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="mt-4">좋아요 {product.likes}개</p>
      <LikeButton id={product.id} initialLikes={product.likes} />
    </div>
  );
}
