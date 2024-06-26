import { ProductsList } from "@/types/products";

const products: ProductsList = require("../server.json");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  if (!title) return Response.json(products);

  const filteredProducts = products.products.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );

  return Response.json({ products: filteredProducts });
}
