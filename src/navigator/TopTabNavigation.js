import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import NotificationScreen from '../screen/NotificationScreen';
import MarketPlaceScreen from '../screen/MarketPlaceScreen';
import WatchScreen from '../screen/WatchScreen';
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../utils/Colors';
import { TabData } from '../data/TabData';


const Tab=createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={()=>({
      tabBarShowLabel:false,
        tabBarActiveTintColor:Colors.primaryColor,
        tabBarInactiveTintColor:Colors.grey
 } )}>{
    TabData.map((tab)=>(
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} options={{tabBarIcon:({focused,color})=>(
            <VectorIcon type={focused? tab.activeiconType : tab.inactiveIconType } name={focused?tab.activeIconName : tab.inactiveIconName} size={focused?tab.size:tab.unFocusSize  } color={color} />
        )}}/>
    ))
 }
       
        
    </Tab.Navigator>
  )
}

export default TopTabNavigation