import styled from "styled-components/native";

import { ArrowUpRight } from 'phosphor-react-native'


export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  width: 100%;
  height: 120px;
  margin-bottom: 40px;
  border-radius: 8px;
`;
export const IconUpRight = styled(ArrowUpRight)`
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  size: 24px;
`;


export const ButtonUpRight = styled.View`
width: 100%;
`

export const OpenPercent = styled.TouchableOpacity.attrs({})`
  width: 100%;
  padding-right: 10px;
  align-items: flex-end;
  position: fixed;
  padding-top: 10px;
`;

export const PercentContainer = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 5px;
`

export const PercentText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  color: #000;
`;




