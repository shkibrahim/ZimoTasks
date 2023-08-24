import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from "../Data/StorageKeys";
export const VidReq = async () => {
  let res = await axios.get('https://reactnative.dev/movies.json');

  let VidData = res.data;
  console.log(VidData);
  AsyncStorage.setItem(StorageKeys.VidData, JSON.stringify(VidData))
.then(() => {
  console.log('Data Saved', VidData);
})
  return VidData;
};
