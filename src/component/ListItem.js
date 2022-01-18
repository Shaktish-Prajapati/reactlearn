import React from "react";
import { View, Text, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

const ListItem = ({ item, removeEmployee }) => {
  return (
    <TouchableOpacity style={ShopList.listItem}>
      <View style={ShopList.listItemView}>
        <Text style={ShopList.listItemText}>{item.text}</Text>
        <Icon color='red' name="delete" onPress={()=>removeEmployee(item.id)} />
      </View>
    </TouchableOpacity>
  );
};

const ShopList = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
