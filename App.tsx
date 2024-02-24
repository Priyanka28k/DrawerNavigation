import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import StackNavigator from './StackNavigator';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {

  return <StackNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
