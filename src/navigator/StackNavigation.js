import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import HomeScreen from '../screen/HomeScreen';
import MainScreen from '../screen/MainScreen';
import { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const[user,setUser]=useState()
  console.log("user:", user);
  

  const onAuthStateChanged=(user ) =>setUser(user);
    


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user?
        <Stack.Screen name="MainScreen" component={MainScreen} />
        :<>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        
        </>
      }

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
