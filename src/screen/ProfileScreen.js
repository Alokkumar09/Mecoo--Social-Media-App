import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {

  const logOut=()=>{
    

auth()
  .signOut()
  .then(() => Alert.alert('User signed out!')).catch(error=>console.log("error:",error));
  }
  return (
    <View>
      <TouchableOpacity style={{borderRadius:5,width:350,backgroundColor:Colors.primaryColor,margin:20}} onPress={logOut}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white",textAlign:"center"}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen