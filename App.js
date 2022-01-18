import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,FlatList, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "./src/component/Setting";
import Home from "./src/component/Home";
import Header from "./src/component/Header";
import ListItem from "./src/component/ListItem";
import AddItem from "./src/component/AddItem";


const Stack = createStackNavigator();
export default function App() {
  const uuid = ()=>{
    return Math.floor(Math.random() * 1000)
  }
  const [items, setitems] = useState([
    {id:uuid(),text:'Neeraj'},
    {id:uuid(),text:'Shaktish'},
    {id:uuid(),text:'Abhishek'},
    {id:uuid(),text:'Varsha'},
    {id:uuid(),text:'Chhota'},
  ])

  

  const removeEmployee = (id)=>{
    setitems((prevItem)=>{return prevItem.filter(items => items.id !== id)})
  }
  const additem = (text)=>{
    if (!text) {
      Alert.alert("Error","Please enter an Employee name",[{text:'Ok'}])
    } else {
      setitems(prevItem=>{
        return ([{id:uuid(),text}, ...prevItem])
      })
      
    }
  }

  return (
    <View style={Appstyles.app}>
      <Header title='Employee List'/>
      <AddItem additem={additem} />
      <FlatList
        data={items}
        renderItem={({item})=><ListItem item={item} removeEmployee = {removeEmployee}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const Appstyles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop:60
    
  },
});
