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
import BgColorButton from "../../../components/button/bgcolorbutton";
function WithdrawalAddress(props: any) {
  const [address, setAddress] = React.useState<string>("");
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
        <Text style={styles._heading}>Withdraw</Text>
        <View style={styles._drawer_icon} />
      </View>
      <Text style={styles._message}>
      Paste or scan withdraw address
      </Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._email_main}>
            <TextInput
              placeholder="Withdrawal address"
              value={address}
              onChangeText={(address) => setAddress(address)}
              style={styles._input}
              underlineColor="#3D4C63"
              placeholderTextColor="#3D4C63"
            />
            <Feather name="eye" size={24} color="gray" />
          </View>
          <TouchableOpacity>
            <Text style={styles._copy_btn_text}>Scan QR Code</Text>
          </TouchableOpacity>
          {address === "" ? (
            <TouchableOpacity disabled style={styles._bg_color_btn}>
              <Text style={styles._bg_color_btn_text}>Withdraw BTC</Text>
            </TouchableOpacity>
          ) : (
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Withdraw BTC"
              path={() => props.navigation.navigate("Confirmation")}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
}
export default WithdrawalAddress;
