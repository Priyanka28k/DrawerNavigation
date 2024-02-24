// In StackNavigator.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from "./src/screens/Splash";
import Parent from "./src/screens/Parent";



const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
       <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
       <Stack.Screen name="Parent" component={Parent} options={{headerShown:false}} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
