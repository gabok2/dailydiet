import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  

`;

export const Titulo= styled.Text`
margin-top: 132px;
font-size: 24px;
color: ${props => props.theme.COLORS.GREEN_DARK};
font-family: ${props => props.theme.FONT_FAMILY.BOLD};
line-height: 31px;
`


export const Subtitulo= styled.Text`
text-align:center;
margin-top: 8px;
font-size: 16px;
color: ${props => props.theme.COLORS.GRAY_100};
font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
line-height: 20px;
font-weight:400;
`

export const Strong= styled.Text`
font-size: 16px;
color: ${props => props.theme.COLORS.GRAY_100};
font-family: ${props => props.theme.FONT_FAMILY.BOLD};
line-height: 20px;
font-weight: bold;
`

export const Imagem= styled.Image`
margin-top: 40px;
width: 224px;
height: 288px;
`

export const Button = styled.TouchableOpacity`
  width: 191px;
  height: 50px;
  background-color: ${props => props.theme.COLORS.GRAY_200};
  border-radius: 6px;
  margin-top: 32px;
  align-items: center;
  justify-content: center;
  padding:16px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.COLORS.WHITE};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  line-height: 18px;
`;