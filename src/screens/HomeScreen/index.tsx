import { Text, View } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { MealsList } from "@components/MealsList";
export function HomeScreen() {
    return (
        <Container>
            <Header />
            <Percent />
            <MealsList />

        </Container>
    );
}

