import { Text } from "react-native";
import { ContainerMealsList } from "./styles";


export function MealsRender() {

    return (
        <ContainerMealsList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => (
                <Text>{ }</Text>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
        >

        </ContainerMealsList>
    )
}