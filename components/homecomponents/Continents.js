// import React from 'react'
// import Navigation from './Navigation';
// import Header from './Header';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// const Continents = () => {
//   return (
//     <>
//     <View style={cont.view}>
//       <Text style={cont.text}>Continents</Text>
//     </View>
//        <Header/>
//     <Navigation />
//     </>
//   )
// }

// export default Continents;
// const cont = StyleSheet.create({
//  view:{
//   width:"100%",
//         height:"100%",
       
//         alignItems:"center",
//  },
//  text:{
//   top:"50%",
//  }
// });

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Soap } from 'react-native-soap';

const WSDL_URL = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

const fetchContinents = async () => {
  try {
    const response = await Soap.createClientAsync({WSDL_URL});
    const result = await response.ListOfContinentsByName();
    const continents = result.tContinent.map(continent => ({
      code: continent.sCode,
      name: continent.sName,
    }));
    return continents;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Continents = () => {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    const getContinents = async () => {
      const fetchedContinents = await fetchContinents();
      setContinents(fetchedContinents);
    };
    getContinents();
  }, []);

  return (
    <View>
      {continents.map(continent => (
        <View key={continent.code}>
          <Text>{continent.code}</Text>
          <Text>{continent.name}</Text>
        </View>
      ))}
    </View>
  );
};
export default Continents;