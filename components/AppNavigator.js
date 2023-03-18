import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';


import LoginScreen from './Login2';

import Staff from './homecomponents/Staff';
import Continents from './homecomponents/Continents';
import Signout from './homecomponents/Signout';

import StaffView from './homecomponents/Addstaff';
import Deletstaff from './homecomponents/Deletestaff';
import Updatestaff from './homecomponents/Updatestaff';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
        
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Staff" component={Staff} />
      <Stack.Screen name="Continets" component={Continents} />
       <Stack.Screen name="StaffView" component={StaffView} />
        <Stack.Screen name="Deletestaff" component={Deletstaff} />
        <Stack.Screen name="Updatestaff" component={Updatestaff} />
      <Stack.Screen name="Signout" component={Signout} />
    
    </Stack.Navigator>
  );
}
