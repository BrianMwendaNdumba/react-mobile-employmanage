import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


const Header = () => {
  return (
   <>
   <View style={styles.homecontainer}>
    <View style={styles.bars}>
        
        <Image source={require('../../assets/bars.png')} style={styles.barimg}/>
      
    </View>
    <View style={styles.name}>
        
        <Text style={styles.nametext}>ZAMARA APP</Text>
      
    </View>

    
    </View>
   </>
  )
}

export default Header;
const styles = StyleSheet.create({
  homecontainer: {
    width:"100%",
    height:"5%",
    display:"flex",
    flexDirection:"row",
    position:"absolute",
    top:2,
    alignItems: "center",
    backgroundColor: "whitesmoke",
    
    
  },
  bars:{
    width: "30%",
    height:"100%",
    alignItems: "center",
    backgroundColor: "whitesmoke",
  },
  name:{
    width:"70%",

  },
  barimg:{
    width:"50%",
    height:"100%",
  },
  nametext:{
    fontSize:30,
  },

});