import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const NewPage = ({navigation}) => {
  return (
    <View style={{flex: 1, padding:14}}>
      <TouchableOpacity onPress={() => {
          navigation.openDrawer();
        }}>
        <FontAwesome6 name="bars" size={28} color="black" />
      </TouchableOpacity>
      {/* <Text
        style={{fontSize: 20}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        NewPage
      </Text> */}
    </View>
  );
};

export default NewPage;

const styles = StyleSheet.create({});
