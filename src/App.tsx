import { StatusBar, View } from "react-native"
import StackNavigation from "./navigator/StackNavigation"




const App = () => {
  


  return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      <StackNavigation/>
      </View>
    

    
  )
}

export default App