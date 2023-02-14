import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerAlienStart= styled.View`
width: 100%;
margin-top: 24px;
`

export const ContainerDados= styled.TouchableOpacity`
margin-bottom: 8px;
padding: 10px;
width: 100%;
height: 49px;
border: 1px solid ${props => props.theme.COLORS.GRAY_500};
border-radius: 8px;
flex-direction: row;
align-items: center;
justify-content: space-between;



`

export const Group= styled.View`
flex-direction: row;
align-items: center;

 
`

export const Hora= styled.Text`
margin-right: 8px;
  font-size: 12px;
  color: ${props => props.theme.COLORS.GRAY_100};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
` 

export const Titulo= styled.Text`

width: 217px;
height: 21px;
font-size: 16px;
color: ${props => props.theme.COLORS.GRAY_200};
font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
`        

export const Data= styled.Text`

  font-size: 18px;
  color: ${props => props.theme.COLORS.GRAY_100};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`

export type CirculopeStyleProps = 'Verde' | 'Vermelho';

type Props = {
  type: CirculopeStyleProps;
}


export const Circulo= styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'Verde' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`