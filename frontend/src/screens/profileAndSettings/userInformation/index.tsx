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
import CountryPciker from "./../../../components/countrypicker";
function UserInformation(props: any) {
  const [firstName, setFirstName] = React.useState<string>("Mattie");
  const [lastName, setLastName] = React.useState<string>("Hardwick");
  const [address, setAddress] = React.useState<string>("74  Monroe Avenue");
  const [city, setCity] = React.useState<string>("Fort Myers");
  const [zipCode, setZipCode] = React.useState<string>("33901");
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
      <Text style={styles._message}>
        We get your personal information from the {"\n"}verification process. If
        you want to make changes{"\n"} on your personal information, contact our
        support.
      </Text>
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
          </View>
          <View style={styles._email_main}>
            <CountryPciker />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default UserInformation;
