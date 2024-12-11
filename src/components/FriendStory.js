import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import StoryImg from "../assets/img2.jpeg"
import ProfileImg from "../assets/img3.jpeg"
import { Colors } from '../utils/Colors'
import {Story} from "../data/Story"

const FriendStory = () => {
  return (
    <>
    {Story.map((item)=>(
         <View key={item.id} style={styles.FriendContainer}>
         <Image style={styles.storyImage} source={item.StoryImg}/>
         <View  style={styles.profileImageContainer}>
         <Image style={styles.ProfileStyle} source={item.ProfileImg}/>
         </View>
         <View style={styles.friendName}>
         <Text style={styles.textStyle}>{item.name}</Text>
         </View>
       
     </View>
    ))}
    </>
   
  )
}

export default FriendStory 
const styles=StyleSheet.create({
    FriendContainer:{
        borderWidth:1,
        borderColor:Colors.lightgrey,
        borderRadius:10,
        marginLeft:5,
        position:"relative"
    },
    storyImage:{
        height:180,
        width:110,
        borderRadius:10
    },
    ProfileStyle:{
        height:40,
        width:40,
        borderRadius:50
    },
    profileImageContainer:{
        position:"absolute",
        top:5,
        left:5,
        borderWidth:2,
        borderColor:Colors.primaryColor,
        borderRadius:50,
        height:45,
        width:45,
        justifyContent:"center",
        alignItems:"center"

    },
    friendName:{
        position:"absolute",
        left:8,bottom:10

    },
    textStyle:{
        color:Colors.white,
        fontSize:14
    }
})