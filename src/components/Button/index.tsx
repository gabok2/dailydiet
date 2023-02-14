import { Plus } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { ContainerButton, Titulo, TituloButton, Container } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  titulo: string;
  icon?: React.ReactNode;
  semTitulo?: boolean;
  branco?: boolean;
  tamanho?: boolean;
}

export function Button({ tamanho, branco, semTitulo, titulo, icon, ...rest }: ButtonProps) {
  return (
    <Container

    >

      {
        semTitulo ? <></> : <Titulo>{titulo}</Titulo>
      }
      <ContainerButton
        isactive={branco}
        tamanho={tamanho}
        {...rest}>
        {icon}
        <TituloButton
          isactive={branco}
        >{titulo}</TituloButton>
      </ContainerButton>
    </Container>
  )
}