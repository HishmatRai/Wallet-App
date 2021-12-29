import React from "react";
import { View, Image, Text } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import withdrawSidebar from "./../../../assets/imagse/withdrawSidebar.svg";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import styles from "./styles";
import {
  DwawerWallet,
  DwawerDeposit,
  DwawerWithdraw,
  DrawerDeposit,
  DrawerExchange,
  DrawerProfile,
  DrawerSignOut,
} from "./../../components/svg";
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: "80%",
        // padding: 20,
      }}
    >
      {/* <==========================> --- <==========================> */}
      <View style={styles.sideMenuContainer}>
        {/* <DrawerItemList {...props} /> */}
        {/* <Drawer.Section /> */}
        {/* <==========================> --- <==========================> */}
        {/* <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.closeDrawer()}> */}
        {/* <Ionicons name="menu" size={30} color="white" /> */}
        {/* </TouchableOpacity> */}

        <Image
          source={require("./../../../assets/imagse/profile.jpg")}
          style={styles._profile_img}
        />
        <Text style={styles._user_name}>Mattie Hardwick</Text>
        <Text style={styles._progress}>Verification in progress</Text>
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <View style={styles._icons_main}>
                  <DwawerWallet />
                </View>
                <Text style={styles._pages}>Wallet</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("WalletOverview")}
        />
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <View style={styles._icons_main}>
                  <DwawerDeposit />
                </View>
                <Text style={styles._pages}>Deposit</Text>
              </View>
            );
          }}
          // onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <View style={styles._icons_main}>
                  <DwawerWithdraw />
                </View>
                <Text style={styles._pages}>Withdraw</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("Amount")}
        />
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <View style={styles._icons_main}>
                  <DrawerDeposit />
                </View>
                <Text style={styles._pages}>Send</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("SendToFriend")}
        />
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <View style={styles._icons_main}>
                  <DrawerExchange />
                </View>
                <Text style={styles._pages}>Exchange</Text>
              </View>
            );
          }}
          // onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <View style={styles._icons_main}>
                  <DrawerProfile />
                </View>
                <Text style={styles._pages}>Profile</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("Profile")}
        />
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <View style={styles._icons_main}>
                  <DrawerSignOut />
                </View>
                <Text style={styles._pages}>Sign out</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </DrawerContentScrollView>
  );
}
