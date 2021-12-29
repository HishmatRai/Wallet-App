import React,{useEffect} from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign,EvilIcons } from "@expo/vector-icons";
import SecurityImg from "./../../../../assets/imagse/security.svg";
import ToggleSwitch from "toggle-switch-react-native";

function Security(props: any) {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [toashMessageShow, settoashMessageShow] =
  React.useState<boolean>(false);
useEffect(() => {
  setTimeout(() => {
    settoashMessageShow(true);
  }, 2000);
}, []);
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
        <Text style={styles._heading}>Security</Text>
        <View style={styles._drawer_icon} />
      </View>
      <View style={styles._img_main}>
        <SecurityImg width={"100%"} height={"100%"} fill={"#000"} />
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles._list_btns} onPress={()=> props.navigation.navigate("ChangePassword")}>
            <Text style={styles._list_btns_text}>Change Password</Text>
            <AntDesign name="arrowright" size={24} color="#B5BBC9" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._list_btns} onPress={()=> props.navigation.navigate("ChangePin")}>
            <Text style={styles._list_btns_text}>Change PIN</Text>
            <AntDesign name="arrowright" size={24} color="#B5BBC9" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._list_btns} onPress={()=> props.navigation.navigate("TwoFactorVerification")}>
            <Text style={styles._list_btns_text}>Two-Factor Verification</Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#D6DCE6"
              offColor="#D6DCE6"
              labelStyle={{
                color: "black",
                fontWeight: "900",
                backgroundColor: "#4788ED",
              }}
              style={
                {
                  // borderWidth: 2,
                  // borderColor: "black",
                  // borderRadius: 30,
                }
              }
              thumbOffStyle={{
                backgroundColor: "#fff",
              }}
              thumbOnStyle={{
                backgroundColor: "#0D1F3C",
              }}
              size="medium"
              onToggle={(isOn) => setToggle(!toggle)}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      {toashMessageShow ? (
        <View style={styles._toash_message_main}>
          <View style={styles._toash_category_main}>
            <View style={styles._toash_category_icon}>
              <Ionicons name="checkmark-sharp" size={15} color="white" />
            </View>
            <Text style={styles._toash_message}>Successfully changed password</Text>
          </View>
          <TouchableOpacity style={styles._toash_close_btn} onPress={()=> settoashMessageShow(false)}>
            <EvilIcons name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
export default Security;
