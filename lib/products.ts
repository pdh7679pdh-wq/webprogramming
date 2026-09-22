export type Product = {
  id: string;
  name: string;
  description: string;
  likes: number;
};

const products: Product[] = [
  { id: "1", name: "무선 이어폰", description: "노이즈 캔슬링 지원 블루투스 이어폰", likes: 12 },
  { id: "2", name: "기계식 키보드", description: "청축 스위치의 기계식 키보드", likes: 8 },
  { id: "3", name: "모니터 암", description: "듀얼 모니터용 거치대", likes: 5 },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<Product[]> {
  await delay(700);
  return products;
}

export async function getProduct(id: string) {
  await delay(400);
  return products.find((p) => p.id === id);
}

export async function likeProduct(id: string) {
  const product = products.find((p) => p.id === id);
  if (!product) return null;
  product.likes += 1;
  return product.likes;
}

export async function addProduct(name: string, description: string) {
  const newProduct: Product = {
    id: String(products.length + 1),
    name,
    description,
    likes: 0,
  };
  products.push(newProduct);
  return newProduct;
}
