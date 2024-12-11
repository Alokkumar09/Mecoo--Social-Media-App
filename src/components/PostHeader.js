import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import postHeader from '../assets/post4.jpeg';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';

const PostHeader = ({data}) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.postTopSec}>
        <View style={styles.row}>
          <Image style={styles.userProfile} source={data.profileImg} />
          <View style={styles.userSecion}>
             <Text style={styles.username}>{data.name}</Text>
            <View style={styles.row}>      
              <Text style={styles.days}>{data.date}</Text>
              <Text style={styles.dot}>.</Text>
              <VectorIcon
                name="user-friends"
                type="FontAwesome5"
                size={15}
                color={Colors.headerIconGrey} style={{marginTop:3}}/>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <VectorIcon
            name="dots-three-horizontal"
            type="Entypo"
            size={25}
            color={Colors.headerIconGrey}
            style={{marginRight:20}}
          />
          <VectorIcon
            name="cross"
            type="Entypo"
            size={25}
            color={Colors.headerIconGrey}
          />
        </View>
      </View>
      
     


      <Text style={{color:Colors.grey,marginTop:10,fontSize:15}}>{data.caption} </Text>
      
    </View>
  );
};

export default PostHeader;
const styles = StyleSheet.create({
  userProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  postHeader: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  postTopSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username:{
    fontSize:16,
    color:Colors.textColor,
    marginBottom:2
  },userSecion:{
    marginLeft:12,

  },days:{
    fontSize:14,
    color:Colors.textGrey
  },dot:{
    fontSize:14,
    color:Colors.textGrey,
    paddingHorizontal:5,
  }
});
