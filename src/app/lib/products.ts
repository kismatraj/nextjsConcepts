export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) undefined;
  return res.json();
}

export async function getProductDetails(productId: string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!res.ok) undefined;
  return res.json();
}
