import AsyncStorage from '@react-native-async-storage/async-storage';

import { Refeições_COLLECTION } from '@storage/storageConfig';

export async function refeiçãoGetAll() {
  try {
    const storage = await AsyncStorage.getItem(Refeições_COLLECTION);

    const refeições: [] = storage ? JSON.parse(storage) : [];

    return refeições;
  } catch (error) {
    throw error;
  }
}