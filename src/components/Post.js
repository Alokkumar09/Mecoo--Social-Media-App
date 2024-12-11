import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import PostHeader from './PostHeader';
import {Colors} from '../utils/Colors';
import PostImg from '../assets/post2.jpeg';
import PostFooter from './PostFooter';
import { PostData } from '../data/PostData';

const Post = () => {
  return (
    <View style={styles.PostContainer}>
        {PostData.map((item)=>(
            <View key={item.id}>

                <PostHeader data={item}/>
                <Image source={item.postImg} style={styles.PostStyle} />
                <PostFooter data={item} />
            </View>
        ))}
    </View>
  );
};

export default Post;
const styles = StyleSheet.create({
  PostContainer: {
    backgroundColor: Colors.white,
    marginTop: 8,
  },
  PostStyle: {
    width: '100%',
    height: 250,
  },
});
