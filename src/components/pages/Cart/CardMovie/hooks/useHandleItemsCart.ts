import { CartContext } from "@/contexts/CartContext";
import { ItemsCart } from "@/types/context";
import { formatPrice } from "@/utils/formatPrice";
import { useContext } from "react";

export const useHandleItemsCart = () => {
  const { setItemsCart } = useContext(CartContext);

  function calcSubtotal(movieData: ItemsCart) {
    return formatPrice(movieData.price * movieData.amount);
  }

  function removeItem(movieData: ItemsCart) {
    setItemsCart((prev: ItemsCart[]) =>
      prev.filter((movie) => movie.id !== movieData.id)
    );
  }

  function removeAmount(movieData: ItemsCart) {
    setItemsCart((prev: ItemsCart[]) =>
      prev.map((movie) => {
        if (movie.id !== movieData.id || movie.amount == 1) return movie;
        return { ...movie, amount: movieData.amount - 1 };
      })
    );
  }

  function addAmount(movieData: ItemsCart, amount?: number) {
    if (!amount) amount = movieData.amount + 1;

    setItemsCart((prev: ItemsCart[]) =>
      prev.map((movie) => {
        if (movie.id !== movieData.id) return movie;
        return { ...movie, amount };
      })
    );
  }

  return { addAmount, calcSubtotal, removeAmount, removeItem };
};
