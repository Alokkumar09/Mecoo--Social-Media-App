import { View, Text, FlatList, Button, Alert, TextInput, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../utils/Colors';

const WatchScreen = () => {
  const [showModal,setShowModal]=useState(false);
  const[selectedUser,setSelectedUser]=useState(undefined)

  const [data,setData]=useState([]);
  // const [searchData,setSearchData]=useState([]);
  const[name,setName]=useState(undefined)
  const[email,setEmail]=useState(undefined)
  const[age,setAge]=useState(undefined)

  const getApiData=async()=>{
    const url="http://10.0.2.2:3000/users";
    let result= await fetch(url);
    result=await result.json();
    setData(result);
  }

  useEffect(()=>{
    getApiData();
    
  },[])


  const saveData=async()=>{
   
    const data={
      name:"vinod",
      age:22,
      email:"vinod@gmail.com"
    }
    const url="http://10.0.2.2:3000/users";
    let result=await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    result=await result.json();
    console.warn(result);
    if(result){
      Alert.alert("Data is Added")
      getApiData();
    }
  }

  const deleteUser=async(id)=>{
    const url="http://10.0.2.2:3000/users";
    let result= await fetch(`${url}/${id}`,{
      method:"DELETE"
    })
    result=await result.json();
    if(result){
      Alert.alert("User is deleted");
      getApiData()
    }
  }
  
 const updateUser=async(data)=>{
   setShowModal(true);
   setSelectedUser(data);}
   
   const updateUserData=async()=>{
    const id=selectedUser.id;
  const url="http://10.0.2.2:3000/users";
  let result=await fetch(`${url}/${id}`,{
    method:"PUT",
    headers:{"Content-Type" :"application/json"},
    body:JSON.stringify({name,age,email})
  })

  result=await result.json()
  if(result){
    getApiData();
    setShowModal(false);
    console.log(result);
    
  }
 }

 useEffect(()=>{
  if(selectedUser){
    setName(selectedUser.name);
    setAge(selectedUser.age.toString());
    setEmail(selectedUser.email);
  }
 },[selectedUser])

//  const searchUser=async(text)=>{
//   const url=`http://10.0.2.2:3000/users?q=${text}`;
//   let result=await fetch(url);
//   result=await result.json();
//   if(result){
//     setSeachData(result);
//   }
//  }

  return (
    <View >

    {/* <View>
      <TextInput placeholder='Search ' style={{borderWidth:2,margin:6,paddingHorizontal:4,borderColor:"skyblue"}} 
      onChangeText={(text)=>searchUser(text)}/>
    </View>
    {
      searchData.length ? searchData.map((item)=><View>
        <Text>{item.name}</Text>
      </View>) :null
    } */}
      {
        data.length? <FlatList
        data={data}
        renderItem={({item})=><View style={{flex:1,backgroundColor:"#6a5acd", flexDirection:"row",margin:4,justifyContent:"center",alignItems:"center"}}>
          <View style={{flex:1,padding:8}}>

          <Text style={{color:"white",fontSize:20,padding:5}}>{item.name}</Text>
          </View>
          <View style={{flex:1}}>
          <Text style={{color:"white",fontSize:20,padding:5}}>{item.email}</Text>
          </View>
          <View style={{flex:0.8}}>
          <Text style={{color:"white",fontSize:20,padding:5}}>{item.age}</Text>
          </View>
          <View style={{flex:0.8,marginRight:8}}>
          <Button title='Del' color={"#8b0000"} onPress={()=>deleteUser(item.id)}/>
          </View>
          <View style={{flex:0.8 ,marginRight:8}}>
          <Button title='Upda' onPress={()=>updateUser(item)} color={"#2e8b57"}/>
          </View>
          <View style={{flex:1}}>
          <Button title="Sav" onPress={saveData} />
          </View>
          
         
        </View>}
        
        
        />:null
      }

      <Modal visible={showModal} transparent={true}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <TextInput  style={styles.input} placeholder='Enter name' value={name} onChangeText={(text)=>setName(text)}/>
            <TextInput  style={styles.input} placeholder='Enter Age' value={age} onChangeText={(text)=>setAge(text)}/>
            <TextInput  style={styles.input} placeholder='Enter Email' value={email} onChangeText={(text)=>setEmail(text)}/>
            
            <View style={{marginBottom:10}}>
              <Button title="update" color={"#5f9ea0"} onPress={updateUserData}/>
              </View>
            <Button title="close" onPress={()=>setShowModal(false)} />
          </View>
        </View>
      </Modal>


    </View>
  )
}

export default WatchScreen;

const styles=StyleSheet.create({
  textInput:{borderWidth:1,marginTop:6,paddingHorizontal:10,borderRadius:8,fontSize:15,fontWeight:"300"},
  centerView:{
   flex:1,
   justifyContent:"center",alignItems:"center"
   
  },
  modalView:{
backgroundColor:"white",
 padding:20,
borderRadius:10,shadowColor:"#000",elevation:1,shadowOpacity:0.5
  },input:{
    borderWidth:1,
    borderColor:"black",margin:6,fontSize:20,width:350,marginBottom:15
  }
})