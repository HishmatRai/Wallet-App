import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
function DocumentVerification(props: any) {
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
        <Text style={styles._heading}>Document Verification</Text>
      </View>
      <View style={styles._progress_main}>
        <View style={styles._progress_done}></View>
      </View>

      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._message}>
            Your document photo helps us prove your identity.{"\n"} It should
            match the information you have provided{"\n"} in the previous steps.
          </Text>

          <View style={styles._login_btn_main}>
            <TouchableOpacity style={styles._btn_main} onPress={()=> props.navigation.navigate("ScanFrontSide")}>
              <View style={styles._btn_icon_main}>
                <Feather name="credit-card" size={24} color="#B5BBC9" />
                <Text style={styles._btn_text}>National ID</Text>
              </View>
              <AntDesign name="arrowright" size={24} color="#B5BBC9" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._btn_main}>
              <View style={styles._btn_icon_main}>
              <Ionicons name="earth-outline" size={24} color="#B5BBC9" />
                <Text style={styles._btn_text}>Passport</Text>
              </View>
              <AntDesign name="arrowright" size={24} color="#B5BBC9" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._btn_main}>
              <View style={styles._btn_icon_main}>
              <FontAwesome name="drivers-license" size={24} color="#B5BBC9" />
                <Text style={styles._btn_text}>Driver’s Licence</Text>
              </View>
              <AntDesign name="arrowright" size={24} color="#B5BBC9" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default DocumentVerification;
