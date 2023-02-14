import styled from "styled-components/native";

export type CirculopeStyleProps = 'Verde' | 'Vermelho';

type Props = {
  type: CirculopeStyleProps;
}


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  align-items: center;
  
`
export const Titulo = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 26px;
  margin-top: 20px;
`

export const SubTitulo = styled.Text`
margin-top: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 20px;
`

export const TituloDataHora = styled.Text`
margin-top: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18px;
`
export const DataHora = styled.Text`
margin-top: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 20px;
`
export const Dieta = styled.View`
  width: 144px;
  height: 34px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
  flex-direction: row;

  
`
export const ContainerButton = styled.View`
margin-top: 294px;
`
export const TituloDieta = styled.Text`
margin-left: 8px;
color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 18px;
`

export const Header = styled.View<Props>`
margin-top: 20px;
 width: 100%;
 background-color: ${({ theme, type }) => type === 'Verde' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  height: 80px;
  align-items: center;
  justify-content: center;
`
export const TituloHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 23px;
  text-align: center;
  font-weight: bold;
`

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  right: 350px;

`

export const Main = styled.View`
    width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding:  24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`



export const Circulo= styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'Verde' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const ContainerModal = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`

export const ContainerModalItem = styled.View`
  padding: 16px;
  align-items: center;
  
  border-radius: 8px;
 
  background-color: #fff;
  height:192px;
 margin-top: 230px;
width: 327px;
`

export const TituloModal = styled.Text`
margin-top: 20px;
text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 23px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;

  align-items: center;
  justify-content: center;
  max-width: 145px;
  max-width: 145px;
`