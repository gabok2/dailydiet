import {
  Container,
  Titulo,
  Subtitulo,
  Strong,
  Imagem,
  Button,
  ButtonText,

} from "./styles";

import illustration from '../../assets/Illustration.png'
import foraDieta from '../../assets/foraDieta.png'
import theme from "@theme/index";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RefeiçãoStorageDTO } from "@storage/refeições/RefeiçãoStorageDTO";

export function Feedback() {
  const { type } = useRoute().params as RefeiçãoStorageDTO;
  const navigation = useNavigation()
  function handleNavigateToHome() {
    navigation.navigate('home')
  }
  return (
    <Container>
      <Titulo
        style={{
          color: type === true ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
        }}
      >{
          type === true ? 'Continue assim!' : 'Que pena!'
        }</Titulo>
      {
        type === true ? (
          <Subtitulo>
            Você continua <Strong>dentro da dieta</Strong>. Muito bem
          </Subtitulo>

        ) : (
          <Subtitulo>
            Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se esforçando e não desista!
          </Subtitulo>
        )

      }

      {
        type == true ?
          <Imagem resizeMode="contain" source={illustration} />
          : <Imagem resizeMode="contain" source={foraDieta} />
      }
      <Button
        onPress={handleNavigateToHome}
      >
        <ButtonText>Ir para a página inicial</ButtonText>
      </Button>
    </Container>
  )
}