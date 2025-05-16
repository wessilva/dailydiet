import { Text } from "react-native";
import { ContainerMealsItem, DietStatus, Hour, MealsName, TitleList, ItemProps } from "./styles";

export function MealsItem() {

    return (
        <ContainerMealsItem>
            <Hour>20:20 |</Hour>
            <MealsName >Salada</MealsName>
            <DietStatus status />

        </ContainerMealsItem>
    )
}

