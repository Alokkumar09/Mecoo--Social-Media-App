import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import storyImg from "../assets/img1.jpeg"
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../utils/Colors'

const StoryView = () => {
  return (
    <View style={styles.createStoryContainer}>
        <Image source={storyImg} style={styles.profileImg}/>
        <View style={styles.iconcontainer}>

        <VectorIcon  name="plus-circle" type="FontAwesome5" size={35} color={Colors.primaryColor} />
        </View>
      <Text style={styles.textStyle}>Story View</Text>
    </View>
  )
}

export default StoryView
const styles=StyleSheet.create({
    profileImg:{
        height:110,
        width:110,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
 createStoryContainer:{
    borderWidth:1,
    borderColor:Colors.lightgrey,
    backgroundColor:Colors.storyImageBg,
    borderRadius:10
    ,alignItems:"center",
    position:"relative",paddingBottom:10

    
    },
    iconcontainer:{
     position:"absolute",
     top:"58%"
    ,backgroundColor:Colors.white,borderRadius:50
    },
    textStyle:{
        fontSize:14,
        color:Colors.black,
        textAlign:"center",
        marginTop:25,
        width:"50%"
    }
})