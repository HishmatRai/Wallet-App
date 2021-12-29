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
import WalletCard from "../../../components/walletcard";
import { Feather } from "@expo/vector-icons";
import { TransactionsLeftCircleArrow, TransactionsDownRightCircleArrow, TransactionsUpRightCircleArrow } from './../../../components/svg'
function AllTransactions(props: any) {
  let LatestTransactions = [
    {
      icon: (
        <TransactionsLeftCircleArrow />
      ),
      title: "$ 204",
      subTitle: "0.021 BTC",
      price: "Withdrawn",
      avarage: "Aug 19, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsDownRightCircleArrow />
      ),
      title: "$ 695.03",
      subTitle: "3.21 ETH",
      price: "Deposited",
      avarage: "Aug 16, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsUpRightCircleArrow />
      ),
      title: "$250",
      subTitle: "37.81 NEO",
      price: "Sent",
      avarage: "Aug 10, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsLeftCircleArrow />
      ),
      title: "$ 204",
      subTitle: "0.021 BTC",
      price: "Withdrawn",
      avarage: "Aug 19, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsDownRightCircleArrow />
      ),
      title: "$ 695.03",
      subTitle: "3.21 ETH",
      price: "Deposited",
      avarage: "Aug 16, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsUpRightCircleArrow />
      ),
      title: "$250",
      subTitle: "37.81 NEO",
      price: "Sent",
      avarage: "Aug 10, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsLeftCircleArrow />
      ),
      title: "$ 204",
      subTitle: "0.021 BTC",
      price: "Withdrawn",
      avarage: "Aug 19, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsDownRightCircleArrow />
      ),
      title: "$ 695.03",
      subTitle: "3.21 ETH",
      price: "Deposited",
      avarage: "Aug 16, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: (
        <TransactionsUpRightCircleArrow />
      ),
      title: "$250",
      subTitle: "37.81 NEO",
      price: "Sent",
      avarage: "Aug 10, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
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
        <Text style={styles._header_heading}>All Transactions</Text>
        <TouchableOpacity style={styles._drawer_icon} onPress={() => props.navigation.navigate("AllTransactionFilters")}>
          <Feather name="filter" size={24} color="#347AF0" />
        </TouchableOpacity>
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
        <Tabs path={props.navigation} />
      </View>
    </View>
  );
}
export default AllTransactions;
