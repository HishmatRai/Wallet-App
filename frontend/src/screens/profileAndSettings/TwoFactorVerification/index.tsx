import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from 'expo-clipboard';
import BgColorButton from "../../../components/button/bgcolorbutton";
function TwoFactorVerification(props: any) {
    const copyToClipboard = () => {
        Clipboard.setString('3M8w2knJKsr3jqMatY iyuraxVvZAmuZ');
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
        Scan the QR code or enter the code manually in{"\n"} your auth app
      </Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._qr_code}>
            <Image
              source={require("./../../../../assets/imagse/qrcode.png")}
              style={styles._qr_code_img}
            />
          </View>
          <Text style={styles._link}>
            3M8w2knJKsr3jqMatY iyuraxVvZAmuZy24lK8
          </Text>
          <TouchableOpacity onPress={copyToClipboard}>
              <Text style={styles._copy_btn_text}>Copy</Text>
          </TouchableOpacity>
          <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Continue"
              path={() => props.navigation.navigate("TwoFactorVerificationCode")}
            />
        </ScrollView>
      </View>
    </View>
  );
}
export default TwoFactorVerification;
