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
import { formatPrice } from "@/utils/formatPrice";

interface ICardMovieProps {
  movieData: ItemsCart;
}

export const CardMovie = ({ movieData }: ICardMovieProps) => {
  const { setItemsCart } = useContext(CartContext);

  const subtotal = formatPrice(movieData.price * movieData.amount);

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
          <p>R$ {formatPrice(movieData.price)}</p>
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
          defaultValue={movieData.amount.toString()}
          handleValue={(value) => addAmount(Number(value))}
          mask="number"
          placeholder="0"
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
