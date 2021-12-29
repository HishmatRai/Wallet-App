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
function ChooseRecipient(props: any) {
  const [search, setSearch] = React.useState<string>("");
  const [keyboardFocus, setKeyboardFocus] = React.useState<boolean>(false);
  let onFocus = () => {
    setKeyboardFocus(true);
  };
  let onBlur = () => {
    setKeyboardFocus(false);
  };

  let UserList = [
    {
      userImg: require("./../../../../assets/imagse/profile.jpg"),
      userName: "Ada Perry",
      userMobNum: "786-222-8410",
    },
    {
      userImg: require("./../../../../assets/imagse/profile.jpg"),
      userName: "Alex McCaddy",
      userMobNum: "786-222-8410",
    },
    {
      userImg: require("./../../../../assets/imagse/profile.jpg"),
      userName: "Alexandra Josh",
      userMobNum: "445-120-4592",
    },
    {
      userImg: require("./../../../../assets/imagse/profile.jpg"),
      userName: "Alexis Henson",
      userMobNum: "502-332-0456",
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
        <Text style={styles._heading}>Choose Recipient</Text>
        <View style={styles._drawer_icon} />
      </View>
      <Text style={styles._title}>0.0096BTC ($103.24 USD)</Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._email_main}>
            <TextInput
              placeholder="Search by names and numbers"
              value={search}
              onChangeText={(search) => setSearch(search)}
              style={styles._input}
              underlineColor="#B5BBC9"
              placeholderTextColor="#B5BBC9"
              autoFocus={keyboardFocus}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
            />
          </View>
          {UserList.map((v, i) => {
            return (
              <TouchableOpacity style={styles._user_list_main} key={i} onPress={()=> props.navigation.navigate("AddMessage")}>
                <Image source={v.userImg} style={styles._profile_img} />
                <View style={styles._user_name_main}>
                  <Text style={styles._user_name}>{v.userName}</Text>
                  <Text style={styles._mob_num}>{v.userMobNum}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
export default ChooseRecipient;
