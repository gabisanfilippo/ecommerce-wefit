import { IconTrash } from "@/assets/icons/IconTrash";
import { Button } from "@/components/ui/Button";
import { ItemsCart } from "@/types/context";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import * as S from "../style";
import { Amount } from "../Amount";
import { useHandleItemsCart } from "../hooks/useHandleItemsCart";

export const CardMovieDesktop = (movieData: ItemsCart) => {
  const { calcSubtotal, removeItem } = useHandleItemsCart();

  return (
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

      <Amount {...movieData} />

      <S.Paragraph>R$ {calcSubtotal(movieData)}</S.Paragraph>

      <Button
        text=""
        bgcolor="transparent"
        onClick={() => removeItem(movieData)}
        icon={<IconTrash />}
      />
    </S.ContainerDesktop>
  );
};
