import { Text } from "react-native";
import { Container, TitleList, MealsDate, MealsItem, MealsTime, MealsDescription, MealsStatus } from "./style";

export function MealsList() {

    return (
        <Container>
            <TitleList>Refeições</TitleList>
            <MealsDate>12.10.23</MealsDate>
            <MealsItem>
                <MealsTime>20:00  |</MealsTime>
                <MealsDescription>X-Tudo</MealsDescription>
                <MealsStatus>O</MealsStatus>
            </MealsItem>
            <MealsItem>
                <MealsTime>20:00  |</MealsTime>
                <MealsDescription>X-Tudo</MealsDescription>
                <MealsStatus>O</MealsStatus>
            </MealsItem>
            <MealsItem>
                <MealsTime>20:00  |</MealsTime>
                <MealsDescription>X-Tudo</MealsDescription>
                <MealsStatus>O</MealsStatus>
            </MealsItem>
            <MealsDate>12.10.23</MealsDate>
            <MealsItem>
                <MealsTime>20:00  |</MealsTime>
                <MealsDescription>X-Tudo</MealsDescription>
                <MealsStatus>O</MealsStatus>
            </MealsItem>
            <MealsItem>
                <MealsTime>20:00  |</MealsTime>
                <MealsDescription>X-Tudo</MealsDescription>
                <MealsStatus>O</MealsStatus>
            </MealsItem>
            <MealsItem>
                <MealsTime>20:00  |</MealsTime>
                <MealsDescription>X-Tudo</MealsDescription>
                <MealsStatus>O</MealsStatus>
            </MealsItem>

        </Container>
    )
}