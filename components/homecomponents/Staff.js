import React from 'react'
import { useNavigation } from '@react-navigation/native';
import StaffList from './StaffList';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
const Staff = () => {
    const navigation = useNavigation();
  const handleaddPress = () => {
    navigation.navigate('StaffView');
  }

     const handledeletePress = () => {
    navigation.navigate('Deletestaff');
  }
  const handleupPress = () => {
    navigation.navigate('Updatestaff');
  }
  return (
    <View>
        <StaffList />
      
          <Button onPress={handleaddPress} title='Add Staff'></Button>
          <Button onPress={handledeletePress} title='Delete Staff'></Button>
          <Button onPress={handleupPress} title='Update Staff'></Button>
    </View>
  )
}

export default Staff;
