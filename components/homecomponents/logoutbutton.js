import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { logout } from '../AuthService';

const LogoutButton = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default LogoutButton;
