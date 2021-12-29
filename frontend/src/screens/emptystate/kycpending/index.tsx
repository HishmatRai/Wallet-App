import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import Tabs from "../../../components/tabs";
import { Feather } from "@expo/vector-icons";
import KycpendingImg from "./../../../../assets/imagse/kycpending.svg";
import { MaterialCommunityIcons } from '@expo/vector-icons';
function KycPending(props:any) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#edf1f9"
        translucent={false}
      />
      <View style={styles._data_main}>
        <View>
          <View style={styles._header_main}>
            <Feather name="align-right" size={24} color="#edf1f9" />
            <Text style={styles._header_heading}>Welcome to Whollet</Text>
            <TouchableOpacity
              onPress={() => props.navigation.openDrawer()}
              style={styles._drawer_icon}
            >
              <Feather name="align-right" size={24} color="#0D1F3C" />
            </TouchableOpacity>
          </View>
          <Text style={styles._title}>
            Your Profile Verification is now in progress. If you {"\n"}don't
            receive a confirmation in the next 24 hours,{"\n"} please
            <Text style={styles._support_btn_text}> contact our support.</Text>

          </Text>
        </View>
        <View style={styles._img_main}>
          <KycpendingImg width={"80%"} height={"80%"} fill={"#000"} />
        </View>
        <TouchableOpacity style={styles._progress_pending_btn}>
          <MaterialCommunityIcons name="clock-time-eight" size={24} color="#FDB32A" />
          <Text style={styles._progress_pending_btn_text}>Verification in progress</Text>
        </TouchableOpacity>
      </View>
      <Tabs path={props.navigation}/>
    </View>
  );
}
export default KycPending;
