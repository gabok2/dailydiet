import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  align-items: center;
  
`

export const Header = styled.View`

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  height: 150px;
  align-items: center;
  justify-content: center;
`
export const ContainerHeaderRow=styled.View`
  flex-direction: row;
  align-items: center;
  
`
export const ButtonIcon=styled.TouchableOpacity`
  position:static;
  right: 100px;

`

export const TituloHeader=styled.Text`
margin-top: 44px;
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const SubTituloHeader=styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 20px;
`

export const Main = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding:  24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
`

export const TituloMain= styled.Text`

  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 20px;
  margin-bottom: 15px;
`
export const ContainerMain= styled.View`

width: 100%;
height: 89px;
background-color: ${({ theme }) => theme.COLORS.GRAY_600};
border-radius: 8px;
padding: 16px;
align-items: center;
justify-content: space-between;
margin: 8px 0px;

`
export const SubTituloMain= styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 20px;
  text-align: center;
`

export const NumeroRefeiçoes= styled.Text`
  font-size:24px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 31.2px;
`

export const ContainerCaixa= styled.View`
margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  

`;

export const ContainerMainFail= styled.View`
   width: 164px;
  height:107px;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT };
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
 
`

export const ContainerMainSuccess= styled.View`
  width: 164px;
  height:107px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  margin:0px 2px;
`;
