import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
function BgColorButton(props:any) {
  return (
    <TouchableOpacity
      style={[styles._bg_color_btn, { backgroundColor: props.bgColor }]}
      onPress={props.path}
    >
      <Text style={[styles._bg_color_btn_text, { color: props.btnTextColor }]}>
        {props.btnTitle}
      </Text>
    </TouchableOpacity>
  );
}
export default BgColorButton;
