import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import theme from '@theme/index';


export type TextProps = 'WHITE' | 'GRAY_1';

export type ItemProps = {
    status: boolean;
}


export const Container = styled.Image`
    width: 87px;
    height: 37px;

`

export const Profile = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
    border-radius: 20px;
    margin-right: 10px;

`

export const BoldTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.G}px;
    font-weight: bold;

    margin-bottom: 3px;
`

export const RegularTitle = styled.Text<{ color?: TextProps }>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
    font-weight: normal;

    color: ${({ theme, color }) => color ? theme.COLORS[color] : theme.COLORS.GRAY_1}
    

    
`

export const ArrowUpIcon = styled.TouchableOpacity`
    
    width: 100%;
    height: 24px;

    justify-content: center;
    align-items: flex-end;

    padding-right: 10px;
    padding-top: 20px;

    
`

export const ArrowIconStyle = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_DARK,
}))` `


export const ContainerMealsItem = styled.View`
 width: 100%;
 height: 49px;

 

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    border-radius: 6px;
    padding: 10px;
 margin-top: 10px;
 margin-bottom: 10px;

`

export const TitleList = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 18px;
    margin-bottom: 20px;`

export const Hour = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    `

export const MealsName = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_1};`

export const DietStatus = styled.TouchableOpacity<ItemProps>`
    width: 14px;
    height: 14px;
    justify-content: center;
    align-items: flex-start;
    
    border-radius: 7px;
    background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `