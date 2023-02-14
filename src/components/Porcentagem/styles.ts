import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'Verde' | 'Vermelho';

type Props = {
  type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity)<Props>`
  margin-top: 36px;
  width: 100%;
  height: 102px;
  margin-bottom: 40px;
  
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme, type }) => type === 'Verde' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`; 

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const  Titulo = styled.Text`
margin-top: 2px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const  Porcentagens = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-left: 14px;
`