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
function NewPassword(props:any) {
  const [password, setPassword] = React.useState<string>("");
  const [repeatPassword, setRepeatPassword] = React.useState<string>("");
  const [passwordShow, setPasswordShow] = React.useState<boolean>(true);
  const [repeatPasswordShow, setRepeatPasswordShow] = React.useState<boolean>(true);
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
        <Text style={styles._heading}>Create New Password</Text>
        <Ionicons name="chevron-back-outline" size={24} color="#edf1f9" />
      </View>
      <Text style={styles._title}>
        Your new password must be different from a {"\n"}previously used
        password
      </Text>
      {keyboardFocus ? (
        <View style={styles._header_img_main2} />
      ) : (
        <View style={styles._header_img_main} />
      )}
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._email_main}>
            <TextInput
              placeholder="New password"
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
              secureTextEntry={passwordShow}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
            />
            {passwordShow === true ? (
              <Feather
                name="eye"
                size={24}
                color="gray"
                onPress={() => setPasswordShow(!passwordShow)}
              />
            ) : (
              <Feather
                name="eye-off"
                size={24}
                color="gray"
                onPress={() => setPasswordShow(!passwordShow)}
              />
            )}
          </View>
          <View style={styles._email_main}>
            <TextInput
              placeholder="Repeat password"
              value={repeatPassword}
              onChangeText={(repeatPassword) =>
                setRepeatPassword(repeatPassword)
              }
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
              secureTextEntry={repeatPasswordShow}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
            />
            {repeatPasswordShow === true ? (
              <Feather
                name="eye"
                size={24}
                color="gray"
                onPress={() => setRepeatPasswordShow(!repeatPasswordShow)}
              />
            ) : (
              <Feather
                name="eye-off"
                size={24}
                color="gray"
                onPress={() => setRepeatPasswordShow(!repeatPasswordShow)}
              />
            )}
          </View>
          <View style={styles._login_btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Submit"
              path={() => props.navigation.navigate("CheckYourEmail")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default NewPassword;
