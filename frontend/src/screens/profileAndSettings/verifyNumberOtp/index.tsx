import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Otp from "../../../components/otp";
import BgColorButton from "../../../components/button/bgcolorbutton";
function VerifyNumberOtp(props: any) {
  const [value, setValue] = React.useState<string>("");
  let OtpCode = (otp: string) => {
    setValue(otp);
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
        <Text style={styles._heading}>Verify Number</Text>
      </View>
      <View style={styles._progress_main}>
        <View style={styles._progress_done}></View>
      </View>
      <Text style={styles._message}>
        Please enter the 4-digit number we have sent {"\n"}
        to your phone
      </Text>
      <View style={styles._otp_show}>
        <Otp OtpCode={OtpCode} />
      </View>
      <View style={styles._verify_btn_main}>
      {value.length === 4 ? (
        <BgColorButton
          bgColor="#347AF0"
          btnTextColor="#fff"
          btnTitle="Verify"
          path={()=> props.navigation.navigate("VerificationDone")}
        />
      ) : (
        <BgColorButton
          bgColor="#347AF0"
          btnTextColor="#fff"
          btnTitle="Resend Code"
        />
      )}
      </View>
    </View>
  );
}
export default VerifyNumberOtp;
