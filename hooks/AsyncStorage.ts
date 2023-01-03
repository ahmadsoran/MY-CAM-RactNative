import AsyncStorage from "@react-native-async-storage/async-storage";

export async function SetToStorage(key: string, value: string) {
  try {
    const res = await AsyncStorage.setItem(key, value);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFromStorage(key: string) {
  try {
    const res = await AsyncStorage.getItem(key);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function RemoveFromStorage(key: string) {
  try {
    const res = await AsyncStorage.removeItem(key);
    return res;
  } catch (error) {
    console.log(error);
  }
}
