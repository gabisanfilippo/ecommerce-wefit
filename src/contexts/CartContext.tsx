import { IChildren } from "@/types/commom";
import { Product } from "@/types/products";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ItemsCart = (Product & { amount: number })[];
interface IContext {
  amountItemsCart: number;
  itemsCart: ItemsCart;
  setItemsCart: Dispatch<SetStateAction<ItemsCart>>;
}

const defaultValues: IContext = {
  amountItemsCart: 1,
  itemsCart: [],
  setItemsCart: () => {},
};

export const CartContext = createContext<IContext>(defaultValues);

export const CartContextProvider = ({ children }: IChildren) => {
  const [itemsCart, setItemsCart] = useState<ItemsCart>([]);

  const amountItemsCart: number = itemsCart.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  return (
    <CartContext.Provider value={{ amountItemsCart, itemsCart, setItemsCart }}>
      {children}
    </CartContext.Provider>
  );
};
