import { Button, TouchableOpacity, View } from "react-native";
import { Container, Title } from "./style";


type Props = {
    onPress: () => void;
}


export function AddMealButton({ onPress }: Props) {
    return (
        <Container onPress={onPress} >
            <Title>Adicionar refeição</Title>
        </Container>
    );
}