import { IChildren } from "@/types/commom";
import { ICartContext, ItemsCart } from "@/types/context";
import { createContext, useState } from "react";

const defaultValues: ICartContext = {
  amountItemsCart: 1,
  itemsCart: [],
  setItemsCart: () => {},
};

export const CartContext = createContext<ICartContext>(defaultValues);

export const CartContextProvider = ({ children }: IChildren) => {
  const [itemsCart, setItemsCart] = useState<ItemsCart[]>([]);

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
