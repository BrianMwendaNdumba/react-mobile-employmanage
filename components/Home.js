import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Header from './homecomponents/Header';
import Navigation from './homecomponents/Navigation';
import Content from './homecomponents/Content';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


const Home = () => {
  return (
    <>
    <Header />
       
    <Content />
    <Navigation /> 
    
    </>
    
  )
}

export default Home;

