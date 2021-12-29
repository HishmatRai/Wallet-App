import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
function Profile(props: any) {
  const [phoneVerification, setPhoneVerification] =
    React.useState<boolean>(false);
  setTimeout(() => {
    setPhoneVerification(true);
  }, 1000);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#EDF1F9"
        translucent={false}
      />
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.back_icon}
      >
        <Ionicons name="chevron-back-sharp" size={24} color="#0D1F3C" />
      </TouchableOpacity>
      <View style={styles._data_main}>
        <Image
          source={require("./../../../../assets/imagse/profile.jpg")}
          style={styles._profile_image}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._user_name}>Mattie Hardwick</Text>
          <TouchableOpacity style={styles._list_btns} onPress={()=> props.navigation.navigate("UserInformation")}>
            <Text style={styles._list_btns_text}>Personal information</Text>
            <AntDesign name="arrowright" size={24} color="#B5BBC9" />
          </TouchableOpacity>
          {phoneVerification ? (
            <TouchableOpacity style={styles._list_btns} onPress={()=> props.navigation.navigate("VerifyNumber")}>
              <Text style={styles._list_btns_text_verified}>
                Phone number verification
              </Text>
              <TouchableOpacity  onPress={()=> props.navigation.navigate("VerifyNumber")}>
                <Text style={styles._change_btn_text}>Change</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles._list_btns}>
              <Text style={styles._list_btns_text}>
                Phone number verification
              </Text>
              <AntDesign name="arrowright" size={24} color="#B5BBC9" />
            </TouchableOpacity>
          )}
          <Text style={styles._setting}>Settings</Text>
          <TouchableOpacity style={styles._list_btns}>
            <Text style={styles._list_btns_text}>Default Currency</Text>
            <View style={styles._currency}>
              <Text style={styles._select_currency}>Dollar (USD)</Text>
              <AntDesign name="arrowright" size={24} color="#B5BBC9" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles._list_btns} onPress={()=> props.navigation.navigate("Security")}>
            <Text style={styles._list_btns_text}>Security</Text>
            <AntDesign name="arrowright" size={24} color="#B5BBC9" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._list_btns}>
            <Text style={styles._list_btns_text}>Help & Support</Text>
            <AntDesign name="arrowright" size={24} color="#B5BBC9" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._list_btns}>
            <Text style={styles._list_btns_text}>Legaly</Text>
            <AntDesign name="arrowright" size={24} color="#B5BBC9" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
export default Profile;
