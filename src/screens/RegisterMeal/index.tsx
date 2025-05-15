import { Text } from "react-native";
import { ArrowLeftIcon, Button, Container, Header, Title } from "./styles";
import { FormRegisterMeal } from "@components/FormAddMeal";

import { useAppNavigation } from "../../hoocks/useNavigation";






export function RegisterMeal() {

    const navigation = useAppNavigation();

    function goTohome() {

        navigation.navigate("home");
    }


    return (
        <Container>
            <Header>
                <Button onPress={goTohome}>
                    <ArrowLeftIcon />
                </Button>
                <Title>Nova refeição</Title>
            </Header>
            <FormRegisterMeal title="Sim" />

        </Container>
    )
}