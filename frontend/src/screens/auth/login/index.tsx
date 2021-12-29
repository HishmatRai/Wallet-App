import React from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LoginImage from "./../../../../assets/imagse/login.svg";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
function Login(props:any) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordShow, setPasswordShow] = React.useState<boolean>(true);
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
      <Text style={styles._heading}>Welcome Back!</Text>
      {keyboardFocus ? null : (
        <View style={styles._header_img_main}>
          <LoginImage width={"100%"} height={"100%"} fill={"#E0E9F8"} />
        </View>
      )}
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
          <View style={styles._email_main}>
            <TextInput
              placeholder="Password"
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
          <TouchableOpacity onPress={() => props.navigation.navigate("ForgotPassword")}>
            <Text style={styles._forgot_password}>Forgot your password?</Text>
          </TouchableOpacity>
          <View style={styles._login_btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Login"
              path={() => props.navigation.navigate("EnterPin")}
            />
          </View>
          <View style={styles._sign_up_main}>
            <Text style={styles._account_title}>Don’t have an account?</Text>
            <TouchableOpacity   onPress={() => props.navigation.navigate("SignUp")}>
              <Text style={styles._sign_up_btn_text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default Login;
