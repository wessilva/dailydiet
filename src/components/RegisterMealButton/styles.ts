import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;

    width: 100%;
    height: 50px;

    justify-content: flex-end;
    align-items: center;
    
`

export const AddMealButton = styled(TouchableOpacity)`
    
    width: 100%;
    height: 50px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_2};
    border-radius: 6px;

    justify-content: center;
    align-items: center;   
`

export const ButtonText = styled.Text`

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_7};
`