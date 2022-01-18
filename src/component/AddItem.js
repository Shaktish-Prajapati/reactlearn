import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

const AddItem = ({additem}) => {
    const [text, setText] = useState('')

    const onChange=(textValue)=>{
        setText(textValue)
    }
  return (
    <View style={AddItemStyle.header}>
      <TextInput placeholder="Add Employee..." style={AddItemStyle.textInput} onChangeText={onChange} />
        <TouchableOpacity style={AddItemStyle.btn} onPress={()=>{
            additem(text)
        }} >
          <Text style={AddItemStyle.btnText}>
            <Icon name="add" size={20} color="#fff" />
            Add Emp
          </Text>
        </TouchableOpacity>
    </View>
  );
};

const AddItemStyle = StyleSheet.create({
    textInput:{
        height:60,
        padding:2,
        fontSize:16
    },
    btn:{
        backgroundColor:'darkslateblue',
        padding:9,
        margin:5
    },
    btnText:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        justifyContent:'center'
    }
});

export default AddItem;
