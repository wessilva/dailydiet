import { Text, View } from "react-native";
import { Container, Diet, DietButton, DietText, MealDate, MealDateInput, MealDateSection, MealDateText, MealDescription, MealDescriptionInput, MealName, MealNameInput, MealTime, MealTimeInput, MealTimeText, } from "./styled";
import { DietTextProps } from "./styled";
import { RegisterMealButton } from "@components/RegisterMealButton";


type Props = {
    title: string;
}
export function FormRegisterMeal({ title }: Props) {

    return (
        <Container>
            <MealName>Nome </MealName>
            <MealNameInput />
            <MealDescription>Descrição</MealDescription>
            <MealDescriptionInput />
            <MealDateSection>
                <MealDate>
                    <MealDateText>Data</MealDateText>
                    <MealDateInput />
                </MealDate>
                <MealTime>
                    <MealTimeText>Hora</MealTimeText>
                    <MealTimeInput />
                </MealTime>
            </MealDateSection>
            <Diet >
                <DietText >Está dentro da dieta?</DietText>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <DietButton title={title} />
                    <DietButton title={title} />
                </View>
            </Diet>
            <RegisterMealButton />
        </Container>
    )
}