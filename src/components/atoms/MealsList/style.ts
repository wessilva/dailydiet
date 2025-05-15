import styled from "styled-components/native";

export const Container = styled.View`
 width: 100%;
 flex: 1;

`

export const TitleList = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 18px;
    margin-bottom: 20px;
`

export const MealsDate = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const MealsItem = styled.View`
    width: 100%;
    height: 49px;

    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;

    border: 1px solid ;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;

    
`

export const MealsTime = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-left: 10px;
`

export const MealsDescription = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`

export const MealsStatus = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: #000;
    margin-right: 10px;
    margin-left: auto;
`