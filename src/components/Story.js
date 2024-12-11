import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import StoryImg from '../assets/img1.jpeg';
import StoryView from './StoryView';
import { Colors } from '../utils/Colors';
import FriendStory from './FriendStory';

const Story = () => {
  return (
    <ScrollView horizontal style={styles.box} showsHorizontalScrollIndicator={false}>
      <StoryView />
      <FriendStory/>
    </ScrollView>
  );
};

export default Story;
const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.white,
    padding: 15,
    marginTop: 4
  },
});
