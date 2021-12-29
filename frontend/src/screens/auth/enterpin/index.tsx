import React, { useEffect, useRef, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import ReactNativePinView from "react-native-pin-view";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
function EnterPin(props:any) {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState<boolean>(false);
  const [enteredPin, setEnteredPin] = useState<string>("");
  const [showCompletedButton, setShowCompletedButton] = useState<boolean>(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
      props.navigation.navigate("Home");
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#edf1f9"
        translucent={false}
      />
      <View style={styles._header_main}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="#0D1F3C" />
        </TouchableOpacity>
        <Text style={styles._heading}>Verification Required</Text>
        <Ionicons name="chevron-back-outline" size={24} color="#edf1f9" />
      </View>
      <Text style={styles._title}>Please enter your PIN to proceed</Text>
      <View style={styles._input_main}>
        <ReactNativePinView
          inputSize={22}
          ref={pinView}
          pinLength={4}
          buttonSize={60}
          onValueChange={(value) => setEnteredPin(value)}
          buttonAreaStyle={{
            marginTop: 50,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: "#9EA5B1",
            borderWidth: 1,
            borderColor: "#9EA5B1",
          }}
          inputViewFilledStyle={{
            backgroundColor: "#75BF72",
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: "#003282",
          }}
          buttonTextStyle={{
            color: "#003282",
          }}
          onButtonPress={(key) => {
            if (key === "custom_left") {
              pinView.current.clear();
            }
            if (key === "custom_right") {
              alert("Entered Pin: " + enteredPin);
            }
            if (key === "three") {
              alert("You can't use 3");
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <MaterialCommunityIcons
                name="backspace-outline"
                size={24}
                color="#003282"
              />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <Entypo name="lock" size={24} color="#003282" />
            ) : undefined
          }
        />
      </View>
    </View>
  );
}
export default EnterPin;
