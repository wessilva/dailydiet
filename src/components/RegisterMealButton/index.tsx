import { AddMealButton, ButtonText, Container } from "./styles";


type Props = {
    onPress?: () => void;
}

export function RegisterMealButton({ onPress }: Props) {

    return (
        <Container>
            < AddMealButton onPress={onPress}>
                <ButtonText>Adicionar refeição</ButtonText>
            </AddMealButton>
        </Container>
    )
}