import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    align-items: center;
    justify-content: center;
`
export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({ size: "large", color: theme.COLORS.RED_DARK }))`

`
