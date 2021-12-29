import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
import QrScaner from "../../../components/qrScaner";
function ScanQrCode(props: any) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        source={require("./../../../../assets/imagse/ScanQRCode.png")}
        style={styles._image}
      >
        <View style={styles._data_main}>
          <View style={styles._header_main}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles._drawer_icon}
            >
              <Ionicons name="chevron-back-sharp" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles._heading}>Scan QR Code</Text>
            <View style={styles._drawer_icon} />
          </View>
          <View>
            <View style={styles._camera_main}>
              {/* <ImageBackground
                source={require("./../../../../assets/imagse/frame.png")}
                style={styles._image2}
              > */}
                <View style={styles._Camera}>
                  <QrScaner />
                </View>
              {/* </ImageBackground> */}
            </View>
            <Text style={styles._message}>
              Position QR code inside the frame
            </Text>
          </View>
          <BgColorButton
            bgColor="#347AF0"
            btnTextColor="#fff"
            btnTitle="Scan Now"
            path={() => props.navigation.navigate("ScanBackSide")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
export default ScanQrCode;
