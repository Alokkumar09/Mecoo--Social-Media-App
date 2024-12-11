import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

const MarketPlaceScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subCon}>
        <TouchableOpacity>
          <View style={[styles.box1, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              1
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.box2, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              2
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.box3, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              3
            </Text>
          </View>
        </TouchableOpacity>
        
      </View>

      <View style={styles.subCon}>
        <TouchableOpacity>
          <View style={[styles.box1, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              4
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.box2, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              5
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.box3, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              6
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.subCon}>
        <TouchableOpacity>
          <View style={[styles.box1, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              7
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.box2, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              8
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.box3, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              9
            </Text>
          </View>
          
        </TouchableOpacity>
      </View>
      <View style={styles.subCon}>
        <TouchableOpacity>
          <View style={[styles.box1, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              7
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.box2, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              8
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.box3, styles.card]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              9
            </Text>
          </View>
          
        </TouchableOpacity>
      </View>
      <View>
      <View style={[{backgroundColor:"black"},{height:100,width:400,justifyContent:"center",elevation:4,shadowColor:'red',shadowOpacity:1,shadowOffset:{height:1,width:1},margin:4}]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              9
            </Text>
          </View>
          <View style={[{backgroundColor:"black"},{height:100,width:400,justifyContent:"center",elevation:4,shadowColor:'red',shadowOpacity:1,shadowOffset:{height:1,width:1},margin:4}]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '400',
              }}>
              9
            </Text>
          </View>
          </View>
      
    </View>
  );
};

export default MarketPlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subCon: {
    flexDirection: "row",flexWrap:"wrap"
  },
  card: {
    height: 100,
  
    width: 100,
    borderRadius: 10,
    margin: 4,
    justifyContent: 'center',
    
  },
  box1: {
    backgroundColor: 'black',
   
  },
  box2: {backgroundColor: 'green'},
  box3: {backgroundColor: 'blue'},
});
