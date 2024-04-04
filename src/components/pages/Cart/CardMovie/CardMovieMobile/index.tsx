import Image from "next/image";
import * as S from "../style";
import { ItemsCart } from "@/types/context";
import { formatPrice } from "@/utils/formatPrice";
import { Button } from "@/components/ui/Button";
import { IconTrash } from "@/assets/icons/IconTrash";
import { Amount } from "../Amount";
import { useHandleItemsCart } from "../hooks/useHandleItemsCart";

export const CardMovieMobile = (movieData: ItemsCart) => {
  const { calcSubtotal, removeItem } = useHandleItemsCart();

  return (
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
          <Amount {...movieData} />
          <div>
            <span>SUBTOTAL</span>
            <S.Paragraph>R$ {calcSubtotal(movieData)}</S.Paragraph>
          </div>
        </S.FlexBetween>
      </S.InfoContainer>
      <Button
        text=""
        bgcolor="transparent"
        onClick={() => removeItem(movieData)}
        icon={<IconTrash />}
      />
    </S.ContainerMobile>
  );
};
