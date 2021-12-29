import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
function NationalIDScan(props: any) {
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
        <Text style={styles._heading}>National ID Scan</Text>
      </View>
      <View style={styles._progress_main}>
        <View style={styles._progress_done}></View>
      </View>

      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._message}>
            Have a final check if all data is clearly visible and{"\n"} that it
            matches the information you have entered in {"\n"}previous steps.
          </Text>
          <Text style={styles._heading_card}>Front Side</Text>
          <View style={styles._card_img_main}>
            <Image
              source={require("./../../../../assets/imagse/Front.jpg")}
              style={styles._card_img}
            />
          </View>
          <TouchableOpacity onPress={()=> props.navigation.navigate("ScanFrontSide")}>
            <Text style={styles._scan_again_btn_text}>Scan Again</Text>
          </TouchableOpacity>

          <Text style={styles._heading_card}>Back Side</Text>
          <View style={styles._card_img_main}>
            <Image
              source={require("./../../../../assets/imagse/Back.jpg")}
              style={styles._card_img}
            />
          </View>
          <TouchableOpacity onPress={()=> props.navigation.navigate("ScanBackSide")}>
            <Text style={styles._scan_again_btn_text}>Scan Again</Text>
          </TouchableOpacity>
          <View style={styles._bottom_btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Finish Verification"
              path={() => props.navigation.navigate("Pending")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default NationalIDScan;
