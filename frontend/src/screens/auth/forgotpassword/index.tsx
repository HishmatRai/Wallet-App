import React from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
function ForgotPassword(props:any) {
  const [email, setEmail] = React.useState<string>("");
  const [keyboardFocus, setKeyboardFocus] = React.useState<boolean>(false);
  let onFocus = () => {
    setKeyboardFocus(true);
  };
  let onBlur = () => {
    setKeyboardFocus(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#edf1f9"
        translucent={false}
      />
      <View style={styles._header_main}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="#0D1F3C" />
        </TouchableOpacity>
        <Text style={styles._heading}>Forgot Password?</Text>
        <Ionicons name="chevron-back-outline" size={24} color="#edf1f9" />
      </View>
      <Text style={styles._title}>
        Enter your registrated email address to receive{"\n"} password reset
        instruction
      </Text>
      {keyboardFocus ? <View style={styles._header_img_main2} /> : <View style={styles._header_img_main} />}
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._email_main}>
            <TextInput
              placeholder="Email address"
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
              autoFocus={keyboardFocus}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
            />
            <Feather name="eye" size={24} color="gray" />
          </View>
          <View style={styles._login_btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Reset Password"
              path={() => props.navigation.navigate("NewPassword")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default ForgotPassword;
