import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  
`;

export const Header = styled.View`
  width: 100%;
  height: 132px;



  flex-direction: row;
  justify-content: start;
  align-items: center;
  
  
  
  padding:  24px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-weight: bold;
  margin-left: 82px;
`;

export const Button = styled.TouchableOpacity`
  
  justify-self: flex-start;
  border-radius: 6px;
  align-items: center;
  
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: 24px;
`;