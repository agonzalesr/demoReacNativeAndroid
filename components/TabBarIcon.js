import React from 'react';
import Ionicons from "react-native-ionicons";
import Colors from "./../constans/Colors";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      onPress={props.press}
      name={props.name}
      android={props.name}
      ios={props.name}
      size={props.size}
      style={props.style}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
