
import { Button } from "@components/Button";
import theme from "../../theme";
import { Header } from "@components/Header";
import { Porcentagem } from "@components/Porcentagem";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { StatusBar } from 'react-native';

import {
  Container,
  ContainerAlienStart,
  Hora,
  Titulo,
  ContainerDados,
  Data,
  Circulo,
  Group,
} from "./styles";
import { Plus } from "phosphor-react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";


import { refeiçãoGetAll } from "@storage/refeições/refeiçãoGetAll"
import { RefeiçãoStorageDTO } from "@storage/refeições/RefeiçãoStorageDTO";


export function Home() {
  const [dados, setDados] = useState<RefeiçãoStorageDTO[]>([]);






  function handleNavigateToRefeição(item: RefeiçãoStorageDTO) {
    navigation.navigate("refeição", item);
  }

  const navigation = useNavigation();

  function handleNavigateToNewRefeicao() {
    navigation.navigate("registro");

  }

  //logica para contar as refeições que estão dentro da dieta
  let refeiçõesDentroDaDieta = 0;
  let refeiçõesForaDaDieta = 0;

  dados.map((item) => {
    if (item.type === true) {
      refeiçõesDentroDaDieta++;
    }
    else {
      refeiçõesForaDaDieta++;
    }
  })

  const totalRefeições = dados.length;
  const caulculoPorcentagem = Number(((refeiçõesDentroDaDieta / dados.length) * 100).toFixed(2));
  //faça uma varredura no array de dados e verifique se o type é true e o proximo type é true, se for true, adicione 1 ao contador mas quero que seja em sequencia, se o proximo type for false, o contador não deve ser incrementado
  let contador = 0;
  const refeiçõesEmSequencia = dados.reduce((acc, item, index, array) => {
    if (item.type === true && array[index + 1]?.type === true) {
      contador++;
    } else {
      contador = 0;
    }
    if (contador > acc) {
      acc = contador;
    }
    return acc;


  }, 0);

  function handleNavigateToEstatísticas() {
    navigation.navigate("estatísticas", {
      caulculoPorcentagem,
      refeiçõesDentroDaDieta,
      totalRefeições,
      refeiçõesForaDaDieta,
      refeiçõesEmSequencia,

    });
  }


  async function loadRefeições() {
    try {
      const refeições = await refeiçãoGetAll();
      setDados(refeições);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    loadRefeições()
  }, []))


  /*{
    No código, o método reduce é usado para iterar sobre cada item do array dados, e agrupar os itens com a mesma data em um objeto. O objeto é inicializado como uma Record com índices do tipo string e valores do tipo { title: string; data: Dados[] }.

    Para cada item, primeiro é extraída a data do item usando const date = item.data. Em seguida, verifica-se se já existe um grupo de dados com a mesma data no objeto acumulador. Se não existir, cria-se um novo grupo com a data extraída e um array vazio para os dados. Se já existir, adiciona-se o item atual ao array de dados do grupo.

    Por fim, o objeto acumulador é passado como argumento para Object.values, que retorna um array de objetos com as seções agrupadas. Esse array é então atribuído à variável sections.

  }*/
  const sections = Object.values(
    dados.reduce((acc, item) => {
      const date = item.data;
      if (!acc[date]) {
        acc[date] = {
          title: date,
          data: [],
        };
      }
      acc[date].data.push(item);
      return acc;
    }, {} as Record<string, { title: string; data: RefeiçãoStorageDTO[] }>)


  );

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          theme.COLORS.WHITE
        }
      />
      <Header />
      <Porcentagem
        onPress={handleNavigateToEstatísticas}
        type={caulculoPorcentagem >= 50 ? "Verde" : "Vermelho"}
        porcentagens={dados.length > 0 ? caulculoPorcentagem : 0}
        color={caulculoPorcentagem >= 50 ? "#639339" : "#BF3B44"}
        titulo="das refeições dentro da dieta" />
      <Button
        onPress={handleNavigateToNewRefeicao}
        icon={<Plus style={{ marginRight: 10 }} size={18} color="#fff" weight="regular" />}
        titulo="Nova refeição" />
      <SectionList

        showsVerticalScrollIndicator={false}
        style={{ width: "100%", marginTop: 30, }}
        sections={sections}
        //convertendo o id em string
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContainerDados
            onPress={() => handleNavigateToRefeição(item)}
          >

            <Group>
              <Hora>{item.hora}    | </Hora>
              <Titulo
                numberOfLines={1}
              >{item.titulo}</Titulo>
            </Group>
            <Circulo
              type={item.type ? "Verde" : "Vermelho"}
            />
          </ContainerDados>
        )}

        renderSectionHeader={({ section: { title } }) => (
          <ContainerAlienStart>
            <Data>{title}</Data>
          </ContainerAlienStart>
        )}
      />
    </Container>
  );
}