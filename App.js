import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs([{ level: 'error' }]);
LogBox.ignoreAllLogs();
import { RNCamera } from 'react-native-camera';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Task2 from './Screens/Task2';
import Task5 from './Screens/Task5';
import Task1 from './Screens/Task1';
import Task4 from './Screens/Task4';

navigator.geolocation = require('@react-native-community/geolocation');
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task5" screenOptions={{ headerShown: false }}>
      
         <Stack.Screen name="Task1" component={Task1} />
         <Stack.Screen name="Task2" component={Task2} />
         {/* <Stack.Screen name="Task3" component={Task3} /> */}
         <Stack.Screen name="Task4" component={Task4} />
         <Stack.Screen name="Task5" component={Task5} />
       
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
