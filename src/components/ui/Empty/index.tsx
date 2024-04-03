import { useRouter } from "next/navigation";
import * as S from "./style";
import { Button } from "../Button";
import { ImageRefresh } from "@/assets/images/ImageRefresh";

interface IEmptyProps {
  mode: "reload" | "back";
}

export const Empty = ({ mode }: IEmptyProps) => {
  const router = useRouter();

  const contents = {
    reload: {
      textButton: "Recarregar página",
      action: () => router.refresh(),
    },
    back: {
      textButton: "Voltar",
      action: () => router.back(),
    },
  };

  const currentContent = contents[mode];

  return (
    <S.Container>
      <h2>Parece que não há nada por aqui :(</h2>
      <ImageRefresh />
      <Button
        text={currentContent.textButton}
        onClick={currentContent.action}
      />
    </S.Container>
  );
};
