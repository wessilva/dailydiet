import { Container } from "./styles";

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