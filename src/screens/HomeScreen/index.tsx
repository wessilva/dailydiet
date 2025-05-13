import { Container } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { MealsList } from "@components/MealsList";
import { AddMealButton } from "@components/AddMealButton";




export function HomeScreen() {


    function handleAddMeal() {
        console.log("Adicionar refeição");
    }
    return (
        <Container>
            <Header />
            <Percent />
            <MealsList />
            <AddMealButton onPress={handleAddMeal} />

        </Container>
    );
}

