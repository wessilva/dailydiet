import { Container } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { MealsList } from "@components/MealsList";
import { AddMealButton } from "@components/AddMealButton";

import { useAppNavigation } from "@hoocks/useNavigation";




export function HomeScreen() {
    const navigation = useAppNavigation();

    // Função para navegar para a tela de registro de refeição
    // Essa função é chamada quando o botão de adicionar refeição é pressionado
    function handleAddMeal() {
        navigation.navigate("registerMeal");
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

