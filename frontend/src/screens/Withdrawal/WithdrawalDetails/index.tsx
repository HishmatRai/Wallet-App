import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import BgColorButton from "../../../components/button/bgcolorbutton";
import { Feather, Ionicons } from "@expo/vector-icons";
import { WidthdwawSuccess, Pending } from "./../../../components/svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function WithdrawalDetails(props: any) {
  const [pending, setPending] = React.useState<boolean>(true);
  const [reject, setReject] = React.useState<boolean>(false);
  const [withdrawn, setWithdrawn] = React.useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setPending(false);
      setReject(true);
    }, 3000);
    setTimeout(() => {
      setReject(false);
      setWithdrawn(true);
    }, 6000);
  }, []);

  let AmountDetails = [
    {
      title: "Total amount",
      price: "24,43743798 BTC",
    },
    {
      title: "Total amount ($)",
      price: "$216,518.59",
    },
    {
      title: "Withdraw fee",
      price: "0,0015 BTC",
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
        <Text style={styles._heading}>Transaction Details</Text>
        <View style={styles._drawer_icon} />
      </View>
      <View style={styles._data_main}>
        {pending ? (
          <View style={styles._pending_icons_main}>
            <Pending />
          </View>
        ) : null}
        {reject ? (
          <View style={styles._reject_icons_main}>
            <MaterialCommunityIcons
              name="window-close"
              size={30}
              color="white"
            />
          </View>
        ) : null}
        {withdrawn ? (
          <View style={styles._reject_icons_main}>
            <WidthdwawSuccess />
          </View>
        ) : null}

        <ScrollView showsVerticalScrollIndicator={false}>
          {pending ? (
            <Text style={styles._pending_title}>Pending withdrawal</Text>
          ) : null}
          {reject ? (
            <Text style={styles._reject_title}>Rejected withdraw</Text>
          ) : null}
          {withdrawn ? (
            <Text style={styles._reject_title}>Withdrawn</Text>
          ) : null}
          <View style={styles._date_main}>
            <View style={styles.date_data_main}>
              <Text style={styles._title}>Date</Text>
              <Text style={styles._data}>18 Nov, 2019</Text>
            </View>
            <View style={styles.date_data_main}>
              <Text style={styles._title}>Time</Text>
              <Text style={styles._data}>11:38 AM</Text>
            </View>
          </View>
          {AmountDetails.map((v, i) => {
            return (
              <View style={styles.user_data_main} key={i}>
                <Text style={styles._title}>{v.title}</Text>
                <Text style={styles._data}>{v.price}</Text>
              </View>
            );
          })}
          <View style={styles.status_main}>
            <Text style={styles._title}>Status</Text>
            <View style={styles._Transaction_confirmed_main}>
            {pending ? (
              <Text style={styles._Transaction_confirmed}>Pending</Text>
          ) : null}
          {reject ? (
            <Text style={styles._Transaction_confirmed}>Rejected</Text>
          ) : null}
          {withdrawn ? (
             <Text style={styles._Transaction_confirmed}>Transaction confirmed</Text>
          ) : null}
              <Feather name="external-link" size={24} color="#347AF0" />
            </View>
          </View>
          <View style={styles.user_data_main}>
            <Text style={styles._title}>Transaction ID</Text>
            <Text style={styles._data}>3M8w2knJKsr3jqMatYiyuraxVvZA</Text>
          </View>
          <View style={styles.user_data_main}>
            <Text style={styles._title}>From</Text>
            <View style={styles._Transaction_confirmed_main}>
              <Text style={styles._data}>0x0b06d4JH48e5DK3jm</Text>
            </View>
          </View>
          <View style={styles.user_data_main}>
            <Text style={styles._title}>To</Text>
            <View style={styles._Transaction_confirmed_main}>
              <Text style={styles._data}>0x0b06d4JH48e5DK3jm</Text>
            </View>
          </View>
          <View style={styles._btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Back to Wallet"
                path={() => props.navigation.navigate("WalletOverview")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default WithdrawalDetails;
