import { IconMinusSign } from "@/assets/icons/IconMinusSign";
import { IconPlusSign } from "@/assets/icons/IconPlusSign";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ItemsCart } from "@/types/context";
import * as S from "../style";
import { useHandleItemsCart } from "../hooks/useHandleItemsCart";

export const Amount = (movieData: ItemsCart) => {
  const { removeAmount, addAmount } = useHandleItemsCart();

  return (
    <S.Flex>
      <Button
        text=""
        bgcolor="transparent"
        onClick={() => removeAmount(movieData)}
        icon={<IconMinusSign />}
      />
      <Input
        defaultValue={movieData.amount.toString()}
        handleValue={(value) => addAmount(movieData, Number(value))}
        mask="number"
        placeholder="0"
      />
      <Button
        text=""
        bgcolor="transparent"
        onClick={() => addAmount(movieData)}
        icon={<IconPlusSign />}
      />
    </S.Flex>
  );
};
