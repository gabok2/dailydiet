import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RefeiçãoStorageDTO } from "@storage/refeições/RefeiçãoStorageDTO";

import { RefeiçãoDelete } from "@storage/refeições/refeiçãoDelete";



import theme from "@theme/index";
import { ArrowLeft, PencilSimpleLine, Trash } from "phosphor-react-native";
import { StatusBar, Modal } from "react-native";
import {
  Container,
  Header,
  TituloHeader,
  ButtonIcon,
  Main,
  Titulo,
  SubTitulo,
  TituloDataHora,
  DataHora,
  Dieta,
  TituloDieta,
  Circulo,
  ContainerButton,
  ContainerModal,
  ContainerModalItem,
  TituloModal,
  ButtonContainer,

} from "./styles";
import { useState } from "react";


export function Refeição() {
  const { titulo, descricao, data, hora, type, id } = useRoute().params as RefeiçãoStorageDTO;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  function handleNavigateToNewRefeicao() {
    navigation.navigate("home");
  }

  function OpenModal() {
    setModalVisible(true);
  }
  function CloseModal() {
    setModalVisible(false);
  }

  async function handleDeleteRefeicao() {
    OpenModal();
    if (modalVisible) {
      await RefeiçãoDelete(titulo);
      navigation.navigate("home");
    }

  }

  function handleNavigateToEditarRefeicao() {
    navigation.navigate("editar", { titulo, descricao, data, hora, type, id });
  }
  return (
    <Container>
      <Modal
        animationType="none"
        transparent
        visible={modalVisible}
        onRequestClose={CloseModal}
      >
        <ContainerModal>
          <ContainerModalItem>
            <TituloModal>Deseja realmente excluir o registro da refeição?</TituloModal>
            <ButtonContainer>
              <Button onPress={CloseModal} tamanho={true} branco={true} semTitulo titulo="Cancelar" />
              <Button onPress={handleDeleteRefeicao} tamanho={true} semTitulo titulo="Sim, excluir" />
            </ButtonContainer>
          </ContainerModalItem>

        </ContainerModal>
      </Modal>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }
        translucent
      />
      <Header
        type={type ? "Verde" : "Vermelho"}
      >
        <ButtonIcon
          onPress={handleNavigateToNewRefeicao}>
          <ArrowLeft size={24} color={theme.COLORS.GRAY_200} weight="regular" />
        </ButtonIcon>
        <TituloHeader>Refeição</TituloHeader>
      </Header>
      <Main>
        <Titulo>
          {titulo}
        </Titulo>
        <SubTitulo>
          {descricao}
        </SubTitulo>

        <TituloDataHora>
          Data e hora
        </TituloDataHora>
        <DataHora>
          {data} ás {hora}
        </DataHora>

        <Dieta>
          <Circulo
            type={type ? "Verde" : "Vermelho"}
          />
          <TituloDieta>
            {type ? "dentro da dieta" : "fora da dieta"}
          </TituloDieta>
        </Dieta>
        <ContainerButton>
          <Button onPress={handleNavigateToEditarRefeicao} icon={<PencilSimpleLine style={{ marginRight: 10 }} size={20} color="#ffff" weight="regular" />} semTitulo titulo="Editar refeição" />
          <Button onPress={handleDeleteRefeicao} branco={true} icon={<Trash size={20} style={{ marginRight: 10 }} color="#1B1D1E" weight="light" />} semTitulo titulo="Excluir refeição" />
        </ContainerButton>
      </Main>
    </Container>
  )
}