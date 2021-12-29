import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
import Email from "./../../../../assets/imagse/email.svg";
function CheckYourEmail(props:any) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#edf1f9"
        translucent={false}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 30,
        }}
      >
        <View>
          <View style={styles._header_main}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="#0D1F3C" />
            </TouchableOpacity>
            <Text style={styles._heading}>Check Your Email</Text>
            <Ionicons name="chevron-back-outline" size={24} color="#edf1f9" />
          </View>
          <Text style={styles._title}>
            Follow a password recovery instructions we have{"\n"} just sent to
            your email address
          </Text>
        </View>
        <View style={styles._header_img_main}>
          <Email width={"100%"} height={"100%"} fill={"#000"} />
        </View>
        <View style={styles._login_btn_main}>
          <BgColorButton
            bgColor="#347AF0"
            btnTextColor="#fff"
            btnTitle="Back to Login"
            path={() => props.navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
}
export default CheckYourEmail;
