import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AuthService from '../AuthService';

const SignoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const response = await AuthService.logout(); // using the AuthService to logout
      if (response && response.data.success) {
        alert('Success logout');
      }
    } catch (error) {
      console.log(error);
      alert('Failed to logout');
    }
  };

  return <Button title="Sign Out" onPress={handleLogout} />;
};

export default SignoutButton;
