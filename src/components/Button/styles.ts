import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  isactive?: boolean;
  tamanho?: boolean;

}
export const ContainerButton = styled(TouchableOpacity)<ButtonProps>`
margin-top: 10px;
width: ${({ tamanho }) => tamanho ? '135px' : '100%'};
height: 50px;
border-radius: 8px;
background-color: ${({ theme, isactive }) => isactive ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
border: 1px solid ${({ theme, isactive }) => isactive ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_200};
flex-direction: row;
align-items: center;
justify-content: center;


`

export const Container = styled.View`
  width: 100%;
  

`


export const Titulo = styled.Text`

  font-size:16px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const TituloButton = styled.Text<ButtonProps>`
font-size:14px;
color: ${({ theme, isactive }) => isactive ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

`