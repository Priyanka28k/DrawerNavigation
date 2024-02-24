import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NewPage from './src/screens/NewPage';
import NewPage1 from "./src/screens/NewPage1";
import CustomDrawerContent from "./src/DrawerScreens.tsx/CustomDrawerContent";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="NewPage"
        component={NewPage}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
