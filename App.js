import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "./src/component/Setting";
import Home from "./src/component/Home";
import Header from "./src/component/Header";
import ListItem from "./src/component/ListItem";

const Stack = createStackNavigator();
export default function App() {
  const [items, setitems] = useState([
    {id:1,text:'Neeraj'},
    {id:2,text:'Shaktish'},
    {id:3,text:'Abhishek'},
    {id:5,text:'Varsha'},
    {id:4,text:'Chhota'},
  ])

  return (
    <View style={Appstyles.app}>
      <Header title='Shopping List'/>
      <FlatList
        data={items}
        renderItem={({item})=><ListItem item={item}/>}
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
