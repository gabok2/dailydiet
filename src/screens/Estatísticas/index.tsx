
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { StatusBar, TouchableOpacity } from "react-native";
import theme from "../../theme";
import {
  Container,
  Header,
  ContainerHeaderRow,
  TituloHeader,
  SubTituloHeader,
  Main,
  ContainerMain,
  TituloMain,
  SubTituloMain,
  NumeroRefeiçoes,
  ContainerMainSuccess,
  ContainerMainFail,
  ContainerCaixa,
  ButtonIcon,

} from "./styles";

type Props = {
  caulculoPorcentagem: number;
  refeiçõesDentroDaDieta: number;
  totalRefeições: number;
  refeiçõesForaDaDieta: number;
  refeiçõesEmSequencia: number;
}

export function Estatísticas() {
  const { refeiçõesEmSequencia, caulculoPorcentagem, refeiçõesDentroDaDieta, totalRefeições, refeiçõesForaDaDieta } = useRoute().params as Props;
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate("home");
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          caulculoPorcentagem >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }
        translucent
      />
      <Header
        style={{
          backgroundColor: caulculoPorcentagem >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }}

      >
        <ContainerHeaderRow>

          <ButtonIcon onPress={handleNavigateToHome}>
            <ArrowLeft size={24} color={caulculoPorcentagem >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} weight="regular" />
          </ButtonIcon>

          <TituloHeader>{
            caulculoPorcentagem >= 0 ? caulculoPorcentagem : 0
          }%</TituloHeader>
        </ContainerHeaderRow>
        <SubTituloHeader>das refeições dentro da dieta</SubTituloHeader>
      </Header>
      <Main>
        <TituloMain>
          Estatísticas gerais
        </TituloMain>

        <ContainerMain>
          <NumeroRefeiçoes>{refeiçõesEmSequencia}</NumeroRefeiçoes>
          <SubTituloMain>melhor sequência de pratos dentro da dieta</SubTituloMain>
        </ContainerMain>

        <ContainerMain>
          <NumeroRefeiçoes>{totalRefeições}</NumeroRefeiçoes>
          <SubTituloMain>refeições registradas</SubTituloMain>
        </ContainerMain>

        <ContainerCaixa>
          <ContainerMainSuccess>
            <NumeroRefeiçoes>{refeiçõesDentroDaDieta}</NumeroRefeiçoes>
            <SubTituloMain>refeições dentro da dieta</SubTituloMain>
          </ContainerMainSuccess>

          <ContainerMainFail>
            <NumeroRefeiçoes>{refeiçõesForaDaDieta}</NumeroRefeiçoes>
            <SubTituloMain>refeições fora da dieta</SubTituloMain>
          </ContainerMainFail>
        </ContainerCaixa>




      </Main>
    </Container>
  )
}