

import React, {useState} from 'react';
//Navigation import
import { useNavigation } from '@react-navigation/native';

import SignoutButton from './Signout';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";




const Navigation = () => {
  const navigation = useNavigation();
  const handleHomePress = () => {
    navigation.navigate('Home');
  }

     const handlestaffPress = () => {
    navigation.navigate('Staff');
  }
  const handlecontPress = () => {
    navigation.navigate('Continets');
  }

  return (
   <>
     <View style={sty.menu}>

        <TouchableOpacity onPress={handleHomePress}>
          <Text>HOME</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={handlestaffPress}><Text>Staff</Text></TouchableOpacity>
        <TouchableOpacity onPress={handlecontPress}><Text>Continents</Text></TouchableOpacity>
        <SignoutButton />
      
    </View>
   
    </>
   
  )
}

export default Navigation;


const sty = StyleSheet.create({
    menu:{
    width:"25%",
    height:200,
    backgroundColor:"whitesmoke",
    position:"absolute",
   top:45,
   left:0,
   alignItems: "center",
   justifyContent:"space-around",
   borderRadius:5,
 
  },

  
});