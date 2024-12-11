import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import fblogo from '../assets/fblogo.png';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

  return (
    <View style={styles.container}>
      <Image source={fblogo} style={styles.fblogoStyle} />
      <View style={styles.subContainer}>
        <View style={styles.IconStyle}>
         
          <VectorIcon
            name="search"
            type="FontAwesome5"
            size={19}
            color={Colors.grey}
            
          />
        </View>
        <View style={styles.IconStyle}>
          <VectorIcon
            name="messenger"
            type="Fontisto"
            size={19}
            color={Colors.grey}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  fblogoStyle: {
    height: 25,
    width: 130,
  },
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },

  subContainer: {
    flexDirection: 'row',
  },
  IconStyle: {
    backgroundColor: Colors.lightgrey,
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
});
