import Image from "next/image";
import * as S from "./style";
import { ItemsCart } from "@/types/context";
import { Button } from "@/components/ui/Button";
import { IconMinusSign } from "@/assets/icons/IconMinusSign";
import { Input } from "@/components/ui/Input";
import { IconPlusSign } from "@/assets/icons/IconPlusSign";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { IconTrash } from "@/assets/icons/IconTrash";
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

  const Amount = () => {
    return (
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
    );
  };

  return (
    <>
      <S.ContainerDesktop>
        <S.Flex>
          <Image
            src={movieData.image}
            alt={"Filme " + movieData.title}
            width={91}
            height={114}
          />
          <div>
            <S.Title>{movieData.title}</S.Title>
            <S.Paragraph>R$ {formatPrice(movieData.price)}</S.Paragraph>
          </div>
        </S.Flex>

        <Amount />

        <S.Paragraph>R$ {subtotal}</S.Paragraph>

        <Button
          text=""
          bgColor="transparent"
          onClick={removeItem}
          icon={<IconTrash />}
        />
      </S.ContainerDesktop>
      <S.ContainerMobile>
        <Image
          src={movieData.image}
          alt={"Filme " + movieData.title}
          width={64}
          height={82}
        />
        <S.InfoContainer>
          <S.FlexBetween>
            <S.Title>{movieData.title}</S.Title>
            <S.Paragraph>R$ {formatPrice(movieData.price)}</S.Paragraph>
          </S.FlexBetween>
          <S.FlexBetween>
            <Amount />
            <div>
              <span>SUBTOTAL</span>
              <S.Paragraph>R$ {subtotal}</S.Paragraph>
            </div>
          </S.FlexBetween>
        </S.InfoContainer>
        <Button
          text=""
          bgColor="transparent"
          onClick={removeItem}
          icon={<IconTrash />}
        />
      </S.ContainerMobile>
    </>
  );
};
