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
import { Heart } from "./../../../components/svg";
import { Ionicons } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
function MessageConfirm(props: any) {
  let AmountDetails = [
    {
      title: "Amount",
      price: "0.00965 BTC",
    },
    {
        title: "Amount ($)",
        price: "$103.24",
      },
  ];
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
        <Text style={styles._heading}>Send to Your Friend</Text>
        <View style={styles._drawer_icon} />
      </View>
      <Text style={styles._message}>Confirm your transaction</Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._price_title}>Recepient</Text>
          <View style={styles._profile_main}>
            <Image
              source={require("./../../../../assets/imagse/profile.jpg")}
              style={styles._profile_img}
            />
            <Text style={styles._user_name}>Alex McCaddy</Text>
          </View>
          <View style={styles._line_main}>
            <View style={styles._line_circle} />
            <View style={styles._line} />
            <View style={styles._line_circle} />
          </View>
          <View style={styles.emoji_btn_main}>
            <Heart />
          </View>
          <Text style={styles._user_message}>
            Hey Alex, thank you for getting that order for me from Amazon!
          </Text>
          <View style={styles._blank_line}/>
          {AmountDetails.map((v, i) => {
            return (
              <View style={styles.user_data_main} key={i}>
                <Text style={styles._title}>{v.title}</Text>
                <Text style={styles._data}>{v.price}</Text>
              </View>
            );
          })}
          <View style={styles._btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Confirm"
                path={() => props.navigation.navigate("MessageDetails")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default MessageConfirm;