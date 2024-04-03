import { Button } from "@/components/ui/Button";
import * as S from "./style";
import { IconAddCart } from "@/assets/icons/IconAddCart";
import { Product } from "@/types/products";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { ItemsCart } from "@/types/context";
import { formatPrice } from "@/utils/formatPrice";

interface ICardAddMovieProps {
  movieData: Product;
}

export const CardAddMovie = ({ movieData }: ICardAddMovieProps) => {
  const { itemsCart, setItemsCart } = useContext(CartContext);

  function addItemsToCart() {
    const existItemOnCart = itemsCart.some(
      (movie) => movie.id === movieData.id
    );

    if (!existItemOnCart)
      return setItemsCart((prev: ItemsCart[]) => [
        ...prev,
        { ...movieData, amount: 1 },
      ]);

    const itemsMapped = itemsCart.map((movie) => {
      if (movie.id !== movieData.id) return movie;
      return { ...movie, amount: movie.amount + 1 };
    });
    setItemsCart(itemsMapped);
  }

  function amountOnCart() {
    const itemOnCart = itemsCart.find((movie) => movie.id === movieData.id);

    if (itemOnCart) return itemOnCart.amount;
    return 0;
  }

  function handleButtonColor() {
    const existItemOnCart = itemsCart.some(
      (movie) => movie.id === movieData.id
    );

    if (existItemOnCart) return "#039B00";
    return "#009EDD";
  }

  return (
    <S.Container>
      <Image
        src={movieData.image}
        alt={"Filme " + movieData.title}
        width={147}
        height={188}
      />
      <h4>{movieData.title}</h4>
      <p>R$ {formatPrice(movieData.price)}</p>
      <Button
        text={"ADICIONAR AO CARRINHO"}
        onClick={addItemsToCart}
        bgcolor={handleButtonColor()}
        icon={
          <S.IconContainer>
            <IconAddCart />
            {amountOnCart()}
          </S.IconContainer>
        }
      />
    </S.Container>
  );
};
