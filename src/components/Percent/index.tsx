import { Text } from 'react-native';
import { Container, PercentContainer, PercentText, OpenPercent, ButtonUpRight, IconUpRight } from './styles';


export function Percent() {

    return (
        <Container>
            <ButtonUpRight>
                <OpenPercent>
                    <IconUpRight />
                </OpenPercent>
            </ButtonUpRight>
            <PercentContainer>90,86%</PercentContainer>
            <PercentText>das refeições dentro da deita </PercentText>
        </Container>
    )
}