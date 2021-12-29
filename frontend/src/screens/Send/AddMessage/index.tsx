import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {
  Bitmap,
  Heart,
  Money,
  EmojiFour,
  EmojiFive,
  EmojiSix,
  EmojoSeven,
} from "./../../../components/svg";
import BgColorButton from "../../../components/button/bgcolorbutton";
function AddMessage(props: any) {
  const [message, setMessage] = React.useState<string>("");
  const [keyboardFocus, setKeyboardFocus] = React.useState<boolean>(false);
  const [activeBtn, setActiveBtn] = React.useState<number>(0);
  let onFocus = () => {
    setKeyboardFocus(true);
  };
  let onBlur = () => {
    setKeyboardFocus(false);
  };

  let EmojoList = [
    {
      emojo: <Bitmap />,
    },
    {
      emojo: <Heart />,
    },
    {
      emojo: <Money />,
    },
    {
      emojo: <EmojiFour />,
    },
    {
      emojo: <EmojiFive />,
    },
    {
      emojo: <EmojiSix />,
    },
    {
      emojo: <EmojoSeven />,
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
        <Text style={styles._heading}>Add Message</Text>
        <View style={styles._drawer_icon} />
      </View>
      <Text style={styles._title}>0.0096BTC ($103.24 USD)</Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._profile_main}>
            <Image
              source={require("./../../../../assets/imagse/profile.jpg")}
              style={styles._profile_img}
            />
            <Text style={styles._user_name}>Alex McCaddy</Text>
          </View>
          <View style={styles.emoji_main}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {EmojoList.map((v, i) => {
                return (
                  <TouchableOpacity
                    style={
                      activeBtn === i
                        ? styles.emoji_btn_active_main
                        : styles.emoji_btn_main
                    }
                    key={i}
                    onPress={() => setActiveBtn(i)}
                  >
                    {v.emojo}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={message === "" ? styles._email_main :styles._email_main2 }>
            <TextInput
              placeholder="Leave Message"
              value={message}
              onChangeText={(message) => setMessage(message)}
              style={styles._input}
              underlineColor="#B5BBC9"
              placeholderTextColor="#B5BBC9"
              autoFocus={keyboardFocus}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
              multiline={true}
            />
          </View>
          <View style={styles.__btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Send"
              path={() => props.navigation.navigate("MessageConfirm")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default AddMessage;
