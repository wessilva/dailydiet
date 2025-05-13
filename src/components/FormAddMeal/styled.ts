import styled from 'styled-components/native';


export type DietTextProps = {
    title: string;


}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
    padding: 24px;
    border-radius: 24px;
    
`

export const MealName = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    margin-top: 24px;
`
export const MealNameInput = styled.TextInput`
    width: 100%;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    margin-top: 5px;
    `


export const MealDescription = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    margin-top: 8px;
`

export const MealDescriptionInput = styled.TextInput`
    width: 100%;
    height: 120px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    margin-top: 5px;
`

export const MealDateSection = styled.View`
   flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-top: 12px;
    gap: 10px;

    
       
`

export const MealDate = styled.View`
    
    width: 48%;
    height: 100px;

`
export const MealTime = styled.View`
    
    width: 48%;
    height: 100px;

`

export const MealDateText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    margin-top: 8px;
`
export const MealDateInput = styled.TextInput`
    width: 100%;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    margin-top: 5px;
`

export const MealTimeText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    margin-top: 8px;
`

export const MealTimeInput = styled.TextInput`
    width: 100%;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    margin-top: 5px;
`

export const Diet = styled.View`
    width: 100%;
    height: 100px;
    
`

export const DietText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    margin-top: 8px;
`
export const DietButton = styled.TouchableOpacity<DietTextProps>`
    
    width: 49%;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    margin-top: 5px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
    justify-content: center;
    align-items: center;
`
