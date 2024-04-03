import { Product } from "./products";

export type ItemsCart = Product & { amount: number };

export interface ICartContext {
  amountItemsCart: number;
  itemsCart: ItemsCart[];
  setItemsCart: Dispatch<SetStateAction<ItemsCart[]>>;
}
