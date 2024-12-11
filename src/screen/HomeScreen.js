import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SubHeader from '../components/SubHeader'
import Story from '../components/Story'
import Post from '../components/Post'

const HomeScreen = () => {
  return (
    <ScrollView>
      <SubHeader/>
      <Story/>
      <Post/>
    </ScrollView>
  )
}

export default HomeScreen