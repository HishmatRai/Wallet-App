import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import Logo from "./../../../assets/imagse/logo.svg";
import BgColorButton from "../../components/button/bgcolorbutton";
function Welcome(props:any) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#347AF0" translucent={false} />
      <View style={styles._data_main}>
        <View style={styles._logo_main}>
          <Logo width={"70%"} height={"70%"} fill={"#000"} />
          <Text style={styles._title}>Welcome to</Text>
          <Text style={styles._heading}>WHOLLET</Text>
        </View>
        <View>
          <BgColorButton
            bgColor="white"
            btnTextColor="#347AF0"
            btnTitle="Create Account"
            path={() => props.navigation.navigate("Login")}
          />
          <View style={styles._sign_up_main}>
            <Text style={styles._account_title}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={styles._sign_up_btn_text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Welcome;
