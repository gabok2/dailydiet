import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, ContainerRow, Porcentagens, Titulo } from "./styles";

type PorcentagemProps = TouchableOpacityProps & {
  titulo: string;
  porcentagens: number;
  type?: ButtonTypeStyleProps
  color?: string;

}

export function Porcentagem({ color, porcentagens, titulo, type = "Verde", ...rest }: PorcentagemProps) {
  return (
    <Container type={type} {...rest}>
      <ContainerRow>
        <Porcentagens>{porcentagens}%</Porcentagens>
        <ArrowUpRight style={{ position: "absolute", left: 165, bottom: 32 }} size={24} color={color} weight="regular" />
      </ContainerRow>
      <Titulo>{titulo}</Titulo>
    </Container>
  );
}