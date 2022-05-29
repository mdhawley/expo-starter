import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '@features/Dashboard';
import {Text} from 'react-native'
const Stack = createStackNavigator();



const Nav = () => {
    return <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
   </Stack.Navigator>
  </NavigationContainer>
}

export default Nav;