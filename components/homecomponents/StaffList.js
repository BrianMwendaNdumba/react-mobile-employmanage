import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/78e0e628f7474751a7d380c307d1fe13/zamara_staff')
      .then(response => response.json())
      .then(data => setStaffList(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
     
      {staffList.map(staff => (
        <View key={staff.staff_number}>
         
          <Text style={styl.nm}>{staff.staff_number}</Text>
           <Text>{staff.staff_name}</Text>
           <Text>{staff.staff_email}</Text>
           <Text>{staff.department}</Text>
           <Text>{staff.salary}</Text>
        
        </View>
      ))}
    </View>
  );
};

export default StaffList;
const styl = StyleSheet.create({
  nm:{
    fontWeight: 700,
    fontSize:20,
  },
});