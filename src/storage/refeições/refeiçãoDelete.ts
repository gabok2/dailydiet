import AsyncStorage from '@react-native-async-storage/async-storage';

import { Refeições_COLLECTION } from '@storage/storageConfig';

import { refeiçãoGetAll } from './refeiçãoGetAll';
import { RefeiçãoStorageDTO } from './RefeiçãoStorageDTO';

export async function RefeiçãoDelete(refeiçãoDelete: string) {
 try{
  const storage = await AsyncStorage.getItem(Refeições_COLLECTION);

  const refeições : RefeiçãoStorageDTO[] = storage ? JSON.parse(storage) : [];

  const refeiçãoFilter = refeições.filter(
    (refeição) => refeição.titulo !== refeiçãoDelete,
  );

  await AsyncStorage.setItem(
    Refeições_COLLECTION,
    JSON.stringify(refeiçãoFilter),
  );

  const refeiçõesAtualizadas = await refeiçãoGetAll();

  return refeiçõesAtualizadas;



 }

 catch(error){
    console.log('Refeição deletada com sucesso!');
    throw error;
  }

}
  

