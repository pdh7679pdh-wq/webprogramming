"use server";

import { revalidatePath } from "next/cache";
import { addProduct, likeProduct as likeProductInDb } from "@/lib/products";

export async function likeProductAction(id: string) {
  const newLikes = await likeProductInDb(id);
  revalidatePath(`/products/${id}`);
  return newLikes;
}

export async function createProductAction(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  await addProduct(name, description);
  revalidatePath("/products");
}
