import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';
import Logo from '../assets/logo.png';
import MetaLogo from '../assets/meta-logo.png';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation=useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


// const onLogin=()=>{
//   auth()
//   .signInWithEmailAndPassword(email,password)
//   .then(response => {
//     console.log('response:',response);
//   })
//   .catch(error => {
//     if (error.code === '"000"') {
//       Alert.alert('Your password is wrong!');
//     }else{
//       Alert.alert(`${error}`);
//     }
//     console.log('error',error);
    

   
//   });

// }
const onLogin = () => {
  if (!email || !password) {
    Alert.alert('Please enter your email and password!');
    return;
  }

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log('Login Successful:', response);
      Alert.alert("Log in")
      // Proceed with navigation or other actions after successful login
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Your password is incorrect!');
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert('No user found with this email.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Please enter a valid email address.');
      } else {
        Alert.alert('Login Error:', error.message);
      }
      console.error('Login Error:', error);
    });
};


  return (
    <View style={styles.container}>
      <VectorIcon
        name="arrow-back"
        size={20}
        type="Ionicons"
        color={Colors.black}
      />
      <View style={styles.subContainer}>
        <Image source={Logo} style={styles.logoStyle} />
        <TextInput
          placeholder="Enter Email or mobile no."
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputBox}
        />
        <TouchableOpacity onPress={onLogin} style={styles.loginbtn}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.forgotbtn}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createbtn} onPress={()=>navigation.navigate("SignupScreen")}>
            <Text style={styles.createText}>Create new account</Text>
        </TouchableOpacity>
        <Image source={MetaLogo} style={styles.metalogo}/>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoStyle: {
    height: 60,
    width: 60,
    marginVertical: '20%',
  },
  container: {
    padding: 8,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    width: '95%',
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  loginbtn: {
    backgroundColor: Colors.primaryColor,
    width: '95%',
    padding: 10,
    borderRadius: 20,
    marginTop: 15,
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize:15,
    fontWeight:"400"
  },
  forgotbtn:{
    marginTop:10,
    fontSize:14,
    color:Colors.grey
  },
  createbtn:{
   borderColor:Colors.primaryColor,
   borderWidth:1,
   width:"95%",
   padding:10,
   alignItems:"center",
   borderRadius:20,
   marginTop:"35%"
  },
  createText:{
    fontSize:15,
    fontWeight:"400",
    color:Colors.primaryColor
  },
  metalogo:{
    height:15,
    width:70,
    marginTop:15
  }
});
