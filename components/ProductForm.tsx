import { createProductAction } from "@/lib/actions";

export function ProductForm() {
  return (
    <form action={createProductAction}>
      <input name="name" placeholder="상품명" required />
      <input name="description" placeholder="설명" required />
      <button type="submit">추가</button>
    </form>
  );
}
