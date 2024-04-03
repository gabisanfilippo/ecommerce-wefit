import { Button } from "@/components/ui/Button";
import * as S from "./style";
import { IconAddCart } from "@/assets/IconAddCart";

export const CardAddMovie = () => {
  return (
    <S.Container>
      <h4>Viúva negra</h4>
      <p>R$ 9,99</p>
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
