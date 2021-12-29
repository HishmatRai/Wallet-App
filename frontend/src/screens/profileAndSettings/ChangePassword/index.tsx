import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";
import { Ionicons, Feather } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
function ChangePassword(props: any) {
  const [currentPassword, setCurrentPassword] = React.useState<string>("");
  const [currentPasswordShow, setCurrentPasswordShow] =
    React.useState<boolean>(true);
  const [newPassword, setNewPassword] = React.useState<string>("");
  const [newPasswordShow, setNewPasswordShow] = React.useState<boolean>(true);
  const [repeatPassword, setRepeatPassword] = React.useState<string>("");
  const [repeatPasswordShow, setRepeatPasswordShow] =
    React.useState<boolean>(true);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#edf1f9"
        translucent={false}
      />
      <View style={styles._header_main}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles._drawer_icon}
        >
          <Ionicons name="chevron-back-sharp" size={24} color="#0D1F3C" />
        </TouchableOpacity>
        <Text style={styles._heading}>Change Password</Text>
        <View style={styles._drawer_icon} />
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._email_main}>
            <TextInput
              placeholder="Current password"
              value={currentPassword}
              onChangeText={(currentPassword) =>
                setCurrentPassword(currentPassword)
              }
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
              secureTextEntry={currentPasswordShow}
            />
            {currentPasswordShow === true ? (
              <Feather
                name="eye"
                size={24}
                color="gray"
                onPress={() => setCurrentPasswordShow(!currentPasswordShow)}
              />
            ) : (
              <Feather
                name="eye-off"
                size={24}
                color="gray"
                onPress={() => setCurrentPasswordShow(!currentPasswordShow)}
              />
            )}
          </View>
          <View style={styles._email_main}>
            <TextInput
              placeholder="New password"
              value={newPassword}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
              secureTextEntry={newPasswordShow}
            />
            {newPasswordShow === true ? (
              <Feather
                name="eye"
                size={24}
                color="gray"
                onPress={() => setNewPasswordShow(!newPasswordShow)}
              />
            ) : (
              <Feather
                name="eye-off"
                size={24}
                color="gray"
                onPress={() => setNewPasswordShow(!newPasswordShow)}
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
          <View style={styles._btn_main}>
            {currentPassword === "" ? (
              <TouchableOpacity disabled style={styles._bg_color_btn}>
                <Text style={styles._bg_color_btn_text}>Change Password</Text>
              </TouchableOpacity>
            ) : (
                <BgColorButton
                bgColor="#347AF0"
                btnTextColor="#fff"
                btnTitle="Change Password"
                path={() => props.navigation.navigate("Security")}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default ChangePassword;
