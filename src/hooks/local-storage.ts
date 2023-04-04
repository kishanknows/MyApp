import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async <S>(key: string, value: S) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
  }
};

export const useLocalStorage = <S>(
  key: string,
  value: S,
): [S, (value: S) => void] => {
  const [getter, setGetter] = useState<S>(value);
  const setter = (value: S) => {
    setGetter(value);
    storeData(key, value);
  };
  useEffect(() => {
    getData(key)
      .then(fetchedValue => fetchedValue && setGetter(fetchedValue))
      .catch(error => setter(value));
  }, []);
  return [getter, setter];
};
