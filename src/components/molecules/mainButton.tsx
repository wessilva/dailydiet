import { RegularTextComponent } from "@components/atoms/regularText";
import { ContainerButton } from "./styles";


type MainButtonProps = {
    onPress: () => void;
}


export function MainButton({ onPress }: MainButtonProps) {

    return (
        <ContainerButton onPress={onPress}>
            <RegularTextComponent colorText="WHITE" text="Adicionar refeição" />
        </ContainerButton>
    )
}