import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,Alert
  } from 'react-native';
  import React, {useState} from 'react';
  import VectorIcon from '../utils/VectorIcon';
  import {Colors} from '../utils/Colors';
  import Logo from '../assets/logo.png';
  import MetaLogo from '../assets/meta-logo.png';
  import { useNavigation } from '@react-navigation/native';
  import auth from '@react-native-firebase/auth';
  
  const SignupScreen = () => {
    const navigation=useNavigation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSignup=()=>{
      if(password!==confirmPassword){
        Alert.alert("Password Don't Match");
        return;
      }
    if(email && password){
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
    }else{
      Alert.alert("Please Fill in details!");
    }
    }
    return (
      <View style={styles.container}>
        <VectorIcon
          name="arrow-back"
          size={20}
          type="Ionicons"
          color={Colors.black}
          onPress={()=>navigation.goBack()}
        />
        <View style={styles.subContainer}>
          <Image source={Logo} style={styles.logoStyle} />
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={text => setFullName(text)}
            style={styles.inputBox}
            />
          <TextInput
            placeholder="Mobile no or email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.inputBox}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputBox}
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            style={styles.inputBox}
          />
          <TouchableOpacity style={styles.loginbtn} onPress={onSignup}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.createbtn} onPress={()=>navigation.navigate("LoginScreen")}>
              <Text style={styles.createText}>Already have an account?</Text>
          </TouchableOpacity>
          <Image source={MetaLogo} style={styles.metalogo}/>
        </View>
      </View>
    );
  };
  
  export default SignupScreen;
  
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
      marginTop:20
    }
  });
  