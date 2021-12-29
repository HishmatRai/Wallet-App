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
import CameraCom from "../../../components/camera";
import BgColorButton from "../../../components/button/bgcolorbutton";
function ScanFrontSide(props: any) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        source={require("./../../../../assets/imagse/ScanFrontSide.jpg")}
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
            <Text style={styles._heading}>Scan Front Side</Text>
            <View style={styles._drawer_icon} />
          </View>
          <View>
            <View style={styles._camera_main}>
              {/* <ImageBackground
                source={require("./../../../../assets/imagse/frame.png")}
                style={styles._image2}
              > */}
                <View style={styles._Camera}>
                  <CameraCom />
                </View>
              {/* </ImageBackground> */}
            </View>
            <Text style={styles._message}>
              Position your document inside the frame. Make {"\n"}sure that all
              the data is clearly visible.
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
export default ScanFrontSide;
