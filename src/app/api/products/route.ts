import { ProductsList } from "@/types/products";

const products: ProductsList = require("../server.json");

export async function GET(request: Request) {
  return Response.json(products);
}
