import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const CustomDrawerContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DrawerItem
        icon={() => <Ionicons name="home" size={24} color="black" />}
        label="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <DrawerItem
        icon={() => <Ionicons name="settings" size={24} color="black" />}
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 17,
    // backgroundColor: 'pink',
  },
});

export default CustomDrawerContent;
