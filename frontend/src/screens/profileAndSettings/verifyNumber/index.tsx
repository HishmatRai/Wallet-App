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
import CountryCodePicker from "../../../components/countrycodepicker";
import { Entypo } from "@expo/vector-icons";
function VerifyNumber(props: any) {
  const [mobNumber, setMobileNumber] = React.useState<string>("");
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
        Please enter your country and your phone number{"\n"} to receive a
        verification code
      </Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles._country_code_picker}>
            <CountryCodePicker />
            <Entypo name="chevron-small-down" size={24} color="#0D1F3C" />
          </TouchableOpacity>
          <View style={styles._email_main}>
            <Text style={styles._code}>+1</Text>
            <TextInput
              placeholder="Phone number"
              value={mobNumber}
              onChangeText={(mobNumber) => setMobileNumber(mobNumber)}
              style={styles._input}
              underlineColor="#0D1F3C"
              placeholderTextColor="#0D1F3C"
              keyboardType={"numeric"}
              autoFocus={keyboardFocus}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
            />
            <Feather name="eye" size={24} color="gray" />
          </View>
          <View
            style={[
              keyboardFocus
                ? styles._submit_btn_main_foucus
                : styles._submit_btn_main,
            ]}
          >
            <TouchableOpacity
            onPress={()=> props.navigation.navigate("VerifyNumberOtp")}
              disabled={mobNumber === ""}
              style={[
                mobNumber === ""
                  ? styles._submit_btn_empty
                  : styles._submit_btn,
              ]}
            >
              <Text
                style={[
                  mobNumber === ""
                    ? styles._submit_btn_empty_text
                    : styles._submit_btn_text,
                ]}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default VerifyNumber;
