import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Like from '../assets/like.jpeg';
import Shock from '../assets/shock.jpeg';
import Heart from '../assets/heart.jpeg';
import {Colors} from '../utils/Colors';
import VectorIcon from '../utils/VectorIcon';

const PostFooter = ({data}) => {
  return (
    <View style={styles.postFooterContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: Colors.lightgrey,
          paddingBottom: 15,
        }}>
        <View style={styles.wrapper}>
          <Image source={Like} style={styles.reactionIcon} />
          <Image source={Shock} style={styles.reactionIcon} />
          <Image source={Heart} style={styles.reactionIcon} />
          <Text style={{color: Colors.grey, fontSize: 14, paddingLeft: 5}}>
            {data.reactionCount}
          </Text>
        </View>
        <Text style={styles.text}>{data.comments} Comments</Text>
      </View>
      <View style={styles.userActionSec}>
        <View style={styles.wrapper}>
          <VectorIcon
            name="like2"
            type="AntDesign"
            size={25}
            color={Colors.grey}
          />
          <Text style={styles.text}>like</Text>
        </View>
        <View style={styles.wrapper}>
          <VectorIcon
            name="chatbox-outline"
            type="Ionicons"
            size={25}
            color={Colors.grey}
          />

          <Text style={styles.text}>Comment</Text>
        </View>
        <View style={styles.wrapper}>
          <VectorIcon
            name="arrow-redo-outline"
            type="Ionicons"
            size={25}
            color={Colors.grey}
          />
          <Text style={styles.text}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  reactionIcon: {
    height: 20,
    width: 20,
  },
  postFooterContainer: {
    padding: 16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userActionSec: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    color: Colors.grey,
    fontSize: 14,
    paddingLeft: 5,
  },
});
