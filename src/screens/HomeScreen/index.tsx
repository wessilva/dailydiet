import { Container } from "./styles";
import { Header } from "@components/atoms/Header";
import { Percent } from "@components/Percent";
import { MealsList } from "@components/atoms/MealsList";
import { AddMealButton } from "@components/AddMealButton";

import { useAppNavigation } from "../../hoocks/useNavigation";
import { HomePage } from "@components/pages/HomePage";




export function HomeScreen() {
    const navigation = useAppNavigation();


    return (
        <Container>
            <HomePage />
        </Container>
    );
}

//<Header />
//<Percent />
//<MealsList />
//<AddMealButton onPress={handleAddMeal} />