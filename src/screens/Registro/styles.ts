import { ButtonTypeStyleProps } from "@components/Porcentagem/styles";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: center;
`;

export const Header = styled.View`
margin-top: 29px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: 65px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  right: 330px;
`

export const TituloHeader = styled.Text`

color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 23px;
  text-align: center;
`

export const Main = styled.View`
   width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding:  24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
`

export const TituloMainNome = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-top:24px;
`

export const InputNome = styled.TextInput`
  margin-top: 4px;
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding:14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20px;
`
export const TituloMainDescrição = styled.Text`
margin-top: 24px;

   font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const InputDescrição = styled.TextInput`
  margin-top: 4px;
  width: 100%;
  height: 120px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding:14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20px;
`

export const TituloMainData= styled.Text`

font-size: 14px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
line-height: 18px;
color: ${({ theme }) => theme.COLORS.GRAY_200};

`

export const InputData= styled.TextInput`
  
  width: 153px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding:14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20px;
`

export const TituloMainHora= styled.Text`
font-size: 14px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
line-height: 18px;
color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const InputHora= styled.TextInput`
  width: 153px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding:14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20px;

`

export const ContainerRowDate= styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
`

export const ContainerColumn = styled.View`
  flex-direction: column;

`

export const ContainerOptions= styled.View`
  margin-top: 24px;
  width: 100%;
  margin-bottom: 80px;
 
  
`

export const TituloOptions= styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 8px;
`

export const ContainerRowOptions= styled.View`
  flex-direction: row;
  justify-content: space-between;

`

type Props = {
  isActive?: boolean;
}

export const ButtonYes= styled.TouchableOpacity<Props>`
  width: 159px;
  height: 50px;
  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_600};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding:16px;
  border: 1px solid ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_600};
`

export const TituloButtonYes= styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18px;
  margin-left: 8px;

`

export const ButtonNo= styled.TouchableOpacity<Props>`
    width: 159px;
  height: 50px;
  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_600 : theme.COLORS.RED_LIGHT};
  border-radius: 6px;
  border: 1px solid ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_600 : theme.COLORS.RED_DARK};
  align-items: center;
  justify-content: center;
  padding:16px;
  flex-direction: row;
`

export const TituloButtonNo= styled.Text`
   color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18px;
  margin-left: 8px;
`

export const BolinhaButtonYes= styled.View`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`

export const BolinhaButtonNo= styled.View`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};

`