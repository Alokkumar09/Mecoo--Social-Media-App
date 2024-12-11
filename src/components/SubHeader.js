import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React ,{useState} from 'react';
import profileLogo from '../assets/img1.jpeg';
import CameraLogo from '../assets/cameraroll.png';
import {Colors} from '../utils/Colors';

const SubHeader = () => {
    const [search,setSearch]=useState();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={profileLogo} style={styles.profile} />
        <View style={styles.inputStyleWrapper}>
          <TextInput style={styles.textInput} placeholder="Write something here..."  value={search} onChangeText={(text)=>setSearch(text)}/>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Image source={CameraLogo} style={styles.CameraLogo} />
        </View>
      </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  profile: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  subContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  container: {},
  inputStyleWrapper: {
    height: 55,
    width: '70%',
    borderRadius: 30,
    justifyContent: 'center',
    borderWidth: 1,
  },
  textInput: {
    paddingHorizontal: 8,
    fontSize: 15
  },
  CameraLogo: {height: 40, width: 40},
});
