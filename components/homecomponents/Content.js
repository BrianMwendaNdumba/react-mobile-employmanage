import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Content = () => {
  return (
    <>
     <View style={styl2.dash}>
        <Text >Welcome <Text style={styl2.boldtext}>Brian Mwenda</Text>,</Text>
        <Text >Your profile details is as below:</Text>
        <Text style={styl2.boldtext}>Age: <Text style={styl2.cleartext}>24</Text></Text>
        <Text style={styl2.boldtext}>Gender: <Text style={styl2.cleartext}>Male</Text></Text>
        <Text style={styl2.boldtext}>Email: <Text style={styl2.cleartext}>ndumbabrian425@gmail.com</Text></Text>
        <Text style={styl2.boldtext}>Phone: <Text style={styl2.cleartext}>+2541254669</Text></Text>
        <Text style={styl2.boldtext}>Birth Date: <Text style={styl2.cleartext}>199-12-25</Text></Text>
        <Text style={styl2.boldtext}>Blood Group: <Text style={styl2.cleartext}>O</Text></Text>
        <Text style={styl2.boldtext}>Height: <Text style={styl2.cleartext}>150</Text></Text>
        <Text style={styl2.boldtext}>Weight: <Text style={styl2.cleartext}>75.4</Text></Text>
        <Text style={styl2.boldtext}>Eye Color: <Text style={styl2.cleartext}>Green</Text></Text>

      
    </View>
    </>
   
  )
}

export default Content;

const styl2 = StyleSheet.create({
    dash:{
        width:"100%",
        height:"100%",
        padding:10,
        alignItems:"center",
        // backgroundColor:"green",
        justifyContent:"space-evenly",
       
        

    },
    boldtext:{
        fontWeight:700,
    },
    cleartext:{
        fontWeight:100,
    },
});