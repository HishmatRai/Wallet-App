import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Tabs from "../../../components/tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import WalletCard from "../../../components/walletcard";
import Neo from "./../../../../assets/imagse/neo.svg";
import Stellar from "./../../../../assets/imagse/Stellar.svg";
import Bitcoin from "./../../../../assets/imagse/Bitcoin.svg";
import Ethereum from "./../../../../assets/imagse/Ethereum.svg";
import Litecoin from "./../../../../assets/imagse/Litecoin.svg";
function AllAssets(props: any) {
  let LatestTransactions = [
    {
      icon: <Bitcoin width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Bitcoin (BTC)",
      subTitle: "0.8934 BTC",
      price: "$ 8,452.98",
      avarage: "+5.24%",
      priceTextColor: "#0D1F3C",
      avarageTextColor: "#75BF72",
      averageTextFontFamily: "TitilliumWeb-SemiBold",
    },
    {
      icon: <Ethereum width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Ethereum (ETH)",
      subTitle: "8.0175 ETH",
      price: "$ 1,825.72",
      avarage: "+1.45%",
      priceTextColor: "#0D1F3C",
      avarageTextColor: "#75BF72",
      averageTextFontFamily: "TitilliumWeb-SemiBold",
    },
    {
      icon: <Litecoin width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Litecoin (LTC)",
      subTitle: "24.82 LTC",
      price: "$ 1,378.45",
      avarage: "-0.91%",
      priceTextColor: "#0D1F3C",
      avarageTextColor: "#75BF72",
      averageTextFontFamily: "TitilliumWeb-SemiBold",
    },
    {
      icon: <Neo width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Neo (NEO)",
      subTitle: "0.8934 BTC",
      price: "$ 8,452.98",
      avarage: "+5.24%",
      priceTextColor: "#0D1F3C",
      avarageTextColor: "#75BF72",
      averageTextFontFamily: "TitilliumWeb-SemiBold",
    },
    {
      icon: <Stellar width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Steller (XLM)",
      subTitle: "8.0175 ETH",
      price: "$ 1,825.72",
      avarage: "+1.45%",
      priceTextColor: "#0D1F3C",
      avarageTextColor: "#75BF72",
      averageTextFontFamily: "TitilliumWeb-SemiBold",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#EDF1F9"
        translucent={false}
      />
      <View style={styles._header_main}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles._drawer_icon}
        >
          <Ionicons name="chevron-back-sharp" size={24} color="#0D1F3C" />
        </TouchableOpacity>
        <Text style={styles._header_heading}>All Assets</Text>
        <View style={styles._drawer_icon} />
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._coin_btn_main}>
            <TouchableOpacity style={styles._coin_btn}>
              <Text style={styles._coin_btn_text}>Coin</Text>
              <Entypo name="chevron-small-down" size={24} color="#485068" />
            </TouchableOpacity>
            <TouchableOpacity style={styles._coin_btn}>
              <Text style={styles._coin_btn_text}>Amount</Text>
              <Entypo name="chevron-small-down" size={24} color="#485068" />
            </TouchableOpacity>
          </View>
          {LatestTransactions.map((v, i) => {
            return (
              <View key={i}>
              <WalletCard
                icon={v.icon}
                title={v.title}
                subTitle={v.subTitle}
                price={v.price}
                avarage={v.avarage}
                priceTextColor={v.priceTextColor}
                avarageTextColor={v.avarageTextColor}
                averageTextFontFamily={v.averageTextFontFamily}
              />
              </View>
            );
          })}
          <View style={{ marginBottom: 30 }}></View>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <Tabs />
      </View>
    </View>
  );
}
export default AllAssets;
