
import { StatusBar } from 'expo-status-bar';

import Navigation from './Navigation';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const StaffView = () => {
  const [staffList, setStaffList] = useState([]);
  const [staffNumber, setStaffNumber] = useState('');
  const [staffName, setStaffName] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

 const fetch = require('node-fetch');
const SMTP_BUCKET_API_KEY = '2c9080c356db0d5f0156db35315a0000';
const SMTP_BUCKET_API_ENDPOINT = 'https://api.smtpbucket.com/emails/2c9080c356db0d5f0156db35315a0000';

// Function to send email notification
const sendEmailNotification = async (staff, type) => {
  const { staff_name, staff_email } = staff;
  const subject = `Profile Notification #${type}`;
  let body = '';
  if (type === 'Created') {
    body = `Greeting ${staff_name}, we are glad to inform you that your staff profile has been created.`;
  } else if (type === 'Edited') {
    body = `Greeting ${staff_name}, we are glad to inform you that your staff profile has been updated.`;
  } else if (type === 'Deleted') {
    body = `Greeting ${staff_name}, we are sad to inform you that your staff profile has been deleted.`;
  }
  
  const response = await fetch(SMTP_BUCKET_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': SMTP_BUCKET_API_KEY
    },
    body: JSON.stringify({
      from: 'noreply@example.com',
      to: staff_email,
      subject: subject,
      html: `<p>${body}</p>`
    })
  });

  const data = await response.json();
  console.log(data);
};


  // Function to fetch the list of staff members from the API
  const fetchStaffList = async () => {
    const response = await fetch('https://crudcrud.com/api/78e0e628f7474751a7d380c307d1fe13/zamara_staff');
    const data = await response.json();
    setStaffList(data);
    
  };

  // Fetch the staff list on component mount
  useEffect(() => {
    fetchStaffList();
  }, []);

  // Function to add a new staff member to the API
  const addStaffMember = async () => {
    const response = await fetch('https://crudcrud.com/api/78e0e628f7474751a7d380c307d1fe13/zamara_staff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        staff_number: staffNumber,
        staff_name: staffName,
        staff_email: staffEmail,
        department: department,
        salary: salary,
      }),
    });
    const data = await response.json();
    setStaffList([...staffList, data]);
    sendEmailNotification(data, 'Created'); // Send email notification
    alert("Added successfully");
  };

  // Function to delete a staff member from the API
  const deleteStaffMember = async (id) => {
    await fetch(`https://crudcrud.com/api/78e0e628f7474751a7d380c307d1fe13/zamara_staff/${id}`, {
      method: 'DELETE',
    });
    setStaffList(staffList.filter((staff) => staff._id !== id));
  };

  
  const handleUpdate = () => {
    const updatedStaff = {
      staff_number: staffNumber,
      staff_name: staffName,
      staff_email: staffEmail,
      department: department,
      salary: salary
    };

    fetch(`https://crudcrud.com/api/78e0e628f7474751a7d380c307d1fe13/zamara_staff/${staffNumber}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedStaff)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <>
     <Header/>
    <View style={stylz.cont}>
     
      
      <Text style={stylz.txt}>Add new staff member:</Text>
    
     
     <TextInput placeholder="Staff Number" value={staffNumber} onChangeText={setStaffNumber} />
      <TextInput placeholder="Staff Name" value={staffName} onChangeText={setStaffName} />
      <TextInput placeholder="Staff Email" value={staffEmail} onChangeText={setStaffEmail} />
      <TextInput placeholder="Department" value={department} onChangeText={setDepartment} />
      <TextInput placeholder="Salary" value={salary} onChangeText={setSalary} />
      <Button title="Add Staff Member" onPress={addStaffMember} />
     


        
    </View>
 {/* <View>
      <Text>Update Staff:</Text>
      <TextInput placeholder="Staff Number" value={staffNumber} onChangeText={setStaffNumber} />
      <TextInput placeholder="Staff Name" value={staffName} onChangeText={setStaffName} />
      <TextInput placeholder="Staff Email" value={staffEmail} onChangeText={setStaffEmail} />
      <TextInput placeholder="Department" value={department} onChangeText={setDepartment} />
      <TextInput placeholder="Salary" value={salary} onChangeText={setSalary} />
      <Button title="Update" onPress={handleUpdate} />
    </View> */}
    </>
  );
};

export default StaffView;
const stylz = StyleSheet.create({
  txt:{
    fontWeight:700,
    alignSelf:"center",
  },
  cont:{
    top:50,
    width:"100%",
    height:"auto",
  },
});