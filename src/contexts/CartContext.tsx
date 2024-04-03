import { IChildren } from "@/types/commom";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IContext {
  amountItemsCart: number;
  setAmountItemsCart: Dispatch<SetStateAction<number>>;
}

const defaultValues: IContext = {
  amountItemsCart: 1,
  setAmountItemsCart: () => {},
};

export const CartContext = createContext<IContext>(defaultValues);

export const CartContextProvider = ({ children }: IChildren) => {
  const [amountItemsCart, setAmountItemsCart] = useState(0);

  return (
    <CartContext.Provider value={{ amountItemsCart, setAmountItemsCart }}>
      {children}
    </CartContext.Provider>
  );
};
