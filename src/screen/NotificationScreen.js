import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'



const NotificationScreen = () => {
  const [data,setData]=useState([]);

 const searchUser=async(text)=>{
  const url=`http://10.0.2.2:3000/users?q=${text}`;
  let result=await fetch(url);
  result=await result.json();
  if(result){
    setData(result);
  }
 }

  return (
    <View>
    
    <View>
      <TextInput placeholder='Search ' style={{borderWidth:2,margin:6,paddingHorizontal:4,borderColor:"skyblue"}} 
      onChangeText={(text)=>searchUser(text)}/>
    </View>
    {
      data.length ? data.map((item)=><View key={item.id}>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
        
      </View>) :null
    }
      <Text>NotificationScreen</Text>
    </View> 
  )
}

export default NotificationScreen

// import { View, Text, FlatList, StyleSheet,Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { ActivityIndicator } from 'react-native';

// const NotificationScreen = () => {
//   const[postData,setPostData]=useState([]);
//   const[isLoading,setIsLoading]=useState(true);
//   const getPostData=async()=>{
//   const url="https://jsonplaceholder.typicode.com/photos";
//   let result= await fetch(url);
//   result=await result.json();
//     setPostData(result);
//     setIsLoading(false);
  


//   }
//   useEffect(()=>{
//     getPostData()
//   },[])

//   return (
//     <View>
//       <Text>NotificationScreen</Text>
//       {isLoading? <ActivityIndicator color={"red"} size={40} /> :       <FlatList data={postData} renderItem={({item})=><View key={item.id} style={styles.Container}>
//          <Image source={{uri:item.url}} style={{height:100,width:100}}/>
//           <Text>{item.id}</Text>
          
//         {/* <Text style={{padding:8,color:"white",fontSize:15,fontWeight:"bold"}}>{item.title}</Text> */}
//       </View>} />}

//     </View>
//   )
// }

// export default NotificationScreen
// const styles=StyleSheet.create({
//   Container:{
//     flexDirection:"row"



//   //   margin:4,
//   //   flexDirection:"row",
//   //  backgroundColor:"blue",
//   //  borderWidth:2
  
    
//   }
// })

