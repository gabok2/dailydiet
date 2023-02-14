import AsyncStorage from '@react-native-async-storage/async-storage';

import { Refeições_COLLECTION } from '@storage/storageConfig';
import { RefeiçãoStorageDTO } from './RefeiçãoStorageDTO';

export async function refeiçãoCreate(refeição: RefeiçãoStorageDTO) {
  try {
    const refeições = await AsyncStorage.getItem(Refeições_COLLECTION);

    if (refeições) {
      const refeiçõesArray = JSON.parse(refeições) as RefeiçãoStorageDTO[];

      await AsyncStorage.setItem(
        Refeições_COLLECTION,
        JSON.stringify([...refeiçõesArray, refeição])
      );
    } else {
      await AsyncStorage.setItem(
        Refeições_COLLECTION,
        JSON.stringify([refeição])
      );
    }
  } catch (error) {
    throw error;
  }

}