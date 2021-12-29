import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import Running from "./../../../../assets/imagse/running.svg";
import BgColorButton from "../../../components/button/bgcolorbutton";
function Pending(props: any) {
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
            <Text style={styles._header_heading}>Well Done!</Text>
          </View>
          <Text style={styles._title}>
            Your profile is now being reviewed. You can {"\n"}expect it to
            finish in the next 24 hours.
          </Text>
        </View>
        <View style={styles._img_main}>
          <Running width={"90%"} height={"90%"} fill={"#000"} />
        </View>
        <BgColorButton
          bgColor="#347AF0"
          btnTextColor="#fff"
          btnTitle="Go Back"
          path={() => props.navigation.navigate("KycPending")}
        />
      </View>
    </View>
  );
}
export default Pending;
