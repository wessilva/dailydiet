import { Text } from "react-native";
import { ArrowLeftIcon, Button, Container, Header, Title } from "./styles";
import { FormRegisterMeal } from "@components/FormAddMeal";

export function RegisterMeal() {

    return (
        <Container>
            <Header>
                <Button>
                    <ArrowLeftIcon />
                </Button>
                <Title>Nova refeição</Title>
            </Header>
            <FormRegisterMeal />

        </Container>
    )
}