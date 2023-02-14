import AsyncStorage from '@react-native-async-storage/async-storage';

import { Refeições_COLLECTION } from '@storage/storageConfig';

import { refeiçãoGetAll } from './refeiçãoGetAll';
import { RefeiçãoStorageDTO } from './RefeiçãoStorageDTO';

export async function RefeiçãoEdit(dados: RefeiçãoStorageDTO) {
  try {
    const refeições = await refeiçãoGetAll() as RefeiçãoStorageDTO[];
    
    const index = refeições.findIndex(refeição => refeição.id === dados.id);
    if (index !== -1) {
      refeições[index] = dados;
      const data = JSON.stringify(refeições);
      await AsyncStorage.setItem(Refeições_COLLECTION, data);
    }
  } catch (error) {
    throw error;
  }
}
