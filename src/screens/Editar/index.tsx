import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import theme from "@theme/index";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Header,
  TituloHeader,
  Main,
  TituloMainNome,
  InputNome,
  TituloMainDescrição,
  InputDescrição,
  TituloMainData,
  InputData,
  TituloMainHora,
  InputHora,
  ContainerRowDate,
  ContainerColumn,
  ContainerOptions,
  TituloOptions,
  ContainerRowOptions,
  ButtonYes,
  TituloButtonYes,
  ButtonNo,
  TituloButtonNo,
  BolinhaButtonYes,
  BolinhaButtonNo,
  ButtonIcon,


} from "./styles";

import { RefeiçãoEdit } from "@storage/refeições/refeiçãoEdit";
import { RefeiçãoStorageDTO } from "@storage/refeições/RefeiçãoStorageDTO";



export function Editar() {
  const { titulo, descricao, data, hora, type, id } = useRoute().params as RefeiçãoStorageDTO;
  const active = type === true ? 1 : 0;
  const [inputData, setInputData] = useState(data)
  const [inputHora, setInputHora] = useState(hora)
  const [inputNome, setInputNome] = useState(titulo)
  const [inputDescrição, setInputDescrição] = useState(descricao)
  const [activeButton, setActiveButton] = useState(active);

  function handleActiveButton(id: number) {
    setActiveButton(id);

  }





  const handleDate = (text: string | any[]) => {
    let newText = '';
    let numbers = '0123456789';

    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }

    if (newText.length <= 2) {
      setInputData(newText);
    } else if (newText.length <= 4) {
      setInputData(newText.substring(0, 2) + '/' + newText.substring(2));
    } else if (newText.length <= 8) {
      setInputData(
        newText.substring(0, 2) +
        '/' +
        newText.substring(2, 4) +
        '/' +
        newText.substring(4)
      );
    }
  };

  const handleHour = (text: string | any[]) => {
    let newText = '';
    let numbers = '0123456789';

    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }

    if (newText.length <= 2) {
      setInputHora(newText);
    } else if (newText.length <= 4) {
      setInputHora(newText.substring(0, 2) + ':' + newText.substring(2));
    } else if (newText.length <= 8) {
      setInputHora(
        newText.substring(0, 2) +
        ':' +
        newText.substring(2, 4)

      );
    }
  };

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate("home");
  }

  async function handleEditar(id: string) {
    const data = {
      id: id,
      titulo: inputNome,
      descricao: inputDescrição,
      data: inputData,
      hora: inputHora,
      type: activeButton === 1 ? true : false,
    }
    await RefeiçãoEdit(data);
    handleNavigateToHome();
  }


  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          theme.COLORS.GRAY_500
        }
        translucent
      />
      <Header>

        <ButtonIcon
          onPress={handleNavigateToHome}
        >
          <ArrowLeft size={24} color={theme.COLORS.GRAY_200} weight="regular" />
        </ButtonIcon>

        <TituloHeader>Editar refeição</TituloHeader>
      </Header>

      <Main>
        <TituloMainNome>
          Nome
        </TituloMainNome>

        <InputNome
          placeholderTextColor={theme.COLORS.GRAY_100}
          onChangeText={text => setInputNome(text)}
          value={inputNome}
        >
        </InputNome>


        <TituloMainDescrição>
          Descrição
        </TituloMainDescrição>

        <InputDescrição
          placeholderTextColor={theme.COLORS.GRAY_100}
          multiline={true}
          maxLength={100}
          textAlignVertical="top"
          onChangeText={text => setInputDescrição(text)}
          value={inputDescrição}
        >
        </InputDescrição>

        <ContainerRowDate>

          <ContainerColumn>
            <TituloMainData>
              Data
            </TituloMainData>

            <InputData
              placeholderTextColor={theme.COLORS.GRAY_100}
              multiline={true}
              maxLength={100}
              textAlignVertical="top"
              value={inputData}
              onChangeText={handleDate}
              keyboardType="numeric"

            >
            </InputData>
          </ContainerColumn>

          <ContainerColumn>

            <TituloMainHora>
              Hora
            </TituloMainHora>

            <InputHora
              placeholderTextColor={theme.COLORS.GRAY_100}
              multiline={true}
              maxLength={100}
              textAlignVertical="top"
              value={inputHora}
              onChangeText={handleHour}
              keyboardType="numeric"
            >
            </InputHora>
          </ContainerColumn>
        </ContainerRowDate>

        <ContainerOptions>
          <TituloOptions>
            Está dentro da dieta?
          </TituloOptions>

          <ContainerRowOptions>

            <ButtonYes
              isActive={activeButton === 1} onPress={() => handleActiveButton(1)}
            >
              <BolinhaButtonYes />
              <TituloButtonYes>
                Sim
              </TituloButtonYes>
            </ButtonYes>

            <ButtonNo
              isActive={activeButton === 1} onPress={() => handleActiveButton(2)}
            >
              <BolinhaButtonNo />
              <TituloButtonNo>
                Não
              </TituloButtonNo>
            </ButtonNo>
          </ContainerRowOptions>
        </ContainerOptions>

        <Button
          onPress={() => handleEditar(id)}
          semTitulo={true} titulo="Salvar alterações" />
      </Main>
    </Container>
  )
}