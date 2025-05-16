import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 120px;
  
`;

export const ContainerPercent = styled.View`

  width: 100%;
  max-height: 140px;
 

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  border-radius: 8px;

  margin-bottom: 40px;
  padding-bottom: 20px;
  
`
export const ContainerButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const ContainerMealsList = styled.FlatList`
  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 10px;
`
