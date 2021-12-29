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
import { Feather } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
import { Ionicons } from "@expo/vector-icons";
import CountryPciker from "./../../../components/countrypicker";
function PersonalInformation(props: any) {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [zipCode, setZipCode] = React.useState<number>();
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
        <Text style={styles._heading}>Personal Information</Text>
      </View>
      <View style={styles._progress_main}>
        <View style={styles._progress_done}></View>
      </View>

      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._email_main}>
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={(firstName) => setFirstName(firstName)}
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
              placeholder="Last Name"
              value={lastName}
              onChangeText={(lastName) => setLastName(lastName)}
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
              placeholder="Street address"
              value={address}
              onChangeText={(address) => setAddress(address)}
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
              placeholder="City"
              value={city}
              onChangeText={(city) => setCity(city)}
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
              placeholder="ZIP/Area code"
              value={zipCode}
              onChangeText={(zipCode) => setZipCode(zipCode)}
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
              keyboardType="numeric"
              autoFocus={keyboardFocus}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
            />
            <Feather name="eye" size={24} color="gray" />
          </View>
          <View style={styles._email_main}>
            <CountryPciker />
            <Feather name="eye" size={24} color="gray" />
          </View>
          <View style={styles._login_btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Next Step"
              path={() => props.navigation.navigate("DocumentVerification")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default PersonalInformation;
