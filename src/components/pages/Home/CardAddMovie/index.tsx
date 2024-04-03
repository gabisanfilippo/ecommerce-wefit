import { Button } from "@/components/ui/Button";
import * as S from "./style";
import { IconAddCart } from "@/assets/IconAddCart";
import { Product } from "@/types/products";
import Image from "next/image";

interface ICardAddMovieProps {
  movieData: Product;
}

export const CardAddMovie = ({ movieData }: ICardAddMovieProps) => {
  const formattedPrice = movieData.price
    .toFixed(2)
    .toString()
    .replace(".", ",");

  return (
    <S.Container>
      <Image
        src={movieData.image}
        alt={"Filme " + movieData.title}
        width={147}
        height={188}
      />
      <h4>{movieData.title}</h4>
      <p>R$ {formattedPrice}</p>
      <Button
        text={"ADICIONAR AO CARRINHO"}
        icon={
          <S.IconContainer>
            <IconAddCart />0
          </S.IconContainer>
        }
      />
    </S.Container>
  );
};
