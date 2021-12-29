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
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import BgColorButton from "../../../components/button/bgcolorbutton";
function TwoFactorVerificationCode(props: any) {
  const [code, setCode] = React.useState<string>("");

  const copyToClipboard = () => {
    Clipboard.setString("3M8w2knJKsr3jqMatY iyuraxVvZAmuZ");
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCode(text);
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
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles._drawer_icon}
        >
          <Ionicons name="chevron-back-sharp" size={24} color="#0D1F3C" />
        </TouchableOpacity>
        <Text style={styles._heading}>Two-Factor Verification</Text>
      </View>
      <Text style={styles._message}>
        Please enter the confirmation code from your{"\n"} auth app
      </Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._email_main}>
            <TextInput
              placeholder="Confirmation code"
              value={code}
              onChangeText={(code) => setCode(code)}
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
            />
            <Feather name="eye" size={24} color="gray" />
          </View>
          <TouchableOpacity onPress={fetchCopiedText}>
            <Text style={styles._copy_btn_text}>Paste Code</Text>
          </TouchableOpacity>
          {code === "" ? (
            <TouchableOpacity disabled style={styles._bg_color_btn}>
              <Text style={styles._bg_color_btn_text}>Done</Text>
            </TouchableOpacity>
          ) : (
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Done"
              path={() => props.navigation.navigate("Security")}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
}
export default TwoFactorVerificationCode;
