import Image from "next/image";
import * as S from "./style";
import { ItemsCart } from "@/types/context";
import { Button } from "@/components/ui/Button";
import { IconMinusSign } from "@/assets/IconMinusSign";
import { Input } from "@/components/ui/Input";
import { IconPlusSign } from "@/assets/IconPlusSign";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { IconTrash } from "@/assets/IconTrash";

interface ICardMovieProps {
  movieData: ItemsCart;
}

export const CardMovie = ({ movieData }: ICardMovieProps) => {
  const { itemsCart, setItemsCart } = useContext(CartContext);

  const formattedPrice = movieData.price
    .toFixed(2)
    .toString()
    .replace(".", ",");

  const subtotal = (movieData.price * movieData.amount)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  function removeItem() {
    setItemsCart((prev: ItemsCart[]) =>
      prev.filter((movie) => movie.id !== movieData.id)
    );
  }

  function removeAmount() {
    setItemsCart((prev: ItemsCart[]) =>
      prev.map((movie) => {
        if (movie.id !== movieData.id || movie.amount == 1) return movie;
        return { ...movie, amount: movieData.amount - 1 };
      })
    );
  }

  function addAmount(amount: number = movieData.amount + 1) {
    setItemsCart((prev: ItemsCart[]) =>
      prev.map((movie) => {
        if (movie.id !== movieData.id) return movie;
        return { ...movie, amount };
      })
    );
  }

  console.log(movieData.amount);

  return (
    <S.Container>
      <S.Flex>
        <Image
          src={movieData.image}
          alt={"Filme " + movieData.title}
          width={91}
          height={114}
        />
        <div>
          <h4>{movieData.title}</h4>
          <p>R$ {formattedPrice}</p>
        </div>
      </S.Flex>

      <S.Flex>
        <Button
          text=""
          bgColor="transparent"
          onClick={removeAmount}
          icon={<IconMinusSign />}
        />
        <Input
          showIcon={false}
          defaultValue={movieData.amount.toString()}
          onSearch={(value) => addAmount(Number(value))}
        />
        <Button
          text=""
          bgColor="transparent"
          onClick={() => addAmount()}
          icon={<IconPlusSign />}
        />
      </S.Flex>

      <p>R$ {subtotal}</p>

      <Button
        text=""
        bgColor="transparent"
        onClick={removeItem}
        icon={<IconTrash />}
      />
    </S.Container>
  );
};
