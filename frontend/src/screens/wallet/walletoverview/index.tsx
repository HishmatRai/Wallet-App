import React,{useEffect} from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Tabs from "../../../components/tabs";
import { Feather, Ionicons,EvilIcons } from "@expo/vector-icons";
import Chart from "../../../components/chart";
import WalletCard from "../../../components/walletcard";
import Bitcoin from "./../../../../assets/imagse/Bitcoin.svg";
import Ethereum from "./../../../../assets/imagse/Ethereum.svg";
import Litecoin from "./../../../../assets/imagse/Litecoin.svg";
import { TransactionsLeftCircleArrow, TransactionsDownRightCircleArrow, TransactionsUpRightCircleArrow } from './../../../components/svg'
function WalletOverview(props: any) {
  const [toashMessageShow, settoashMessageShow] =
  React.useState<boolean>(false);
useEffect(() => {
  setTimeout(() => {
    settoashMessageShow(true);
  }, 2000);
}, []);
  let AssetsCardData = [
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
  ];

  let LatestTransactions = [
    {
      icon: <TransactionsLeftCircleArrow />,
      title: "$ 204",
      subTitle: "0.021 BTC",
      price: "Withdrawn",
      avarage: "Aug 19, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: <TransactionsDownRightCircleArrow />,
      title: "$ 695.03",
      subTitle: "3.21 ETH",
      price: "Deposited",
      avarage: "Aug 16, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: <TransactionsUpRightCircleArrow />,
      title: "$250",
      subTitle: "37.81 NEO",
      price: "Sent",
      avarage: "Aug 10, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: <TransactionsLeftCircleArrow />,
      title: "$ 204",
      subTitle: "0.021 BTC",
      price: "Withdrawn",
      avarage: "Aug 19, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: <TransactionsDownRightCircleArrow />,
      title: "$ 695.03",
      subTitle: "3.21 ETH",
      price: "Deposited",
      avarage: "Aug 16, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
    {
      icon: <TransactionsUpRightCircleArrow />,
      title: "$250",
      subTitle: "37.81 NEO",
      price: "Sent",
      avarage: "Aug 10, 2019",
      priceTextColor: "#DF5060",
      avarageTextColor: "#485068",
      averageTextFontFamily: "TitilliumWeb-Regular",
    },
  ]
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#347AF0"
        translucent={false}
      />
      <View style={{ backgroundColor: "#347AF0" }}>
        <View style={styles._header_main}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles._drawer_icon}
          >
            <Ionicons name="chevron-back-sharp" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles._header_heading}>Portfolio</Text>
          <TouchableOpacity
            onPress={() => props.navigation.openDrawer()}
            style={styles._drawer_icon}
          >
            <Feather name="align-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles._price}>$24,825.90</Text>
        <Text style={styles._wallet_title}>Wallet Balance</Text>
        <Chart />
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._card_heading}>Assets</Text>
          {AssetsCardData.map((v, i) => {
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
                  screenPath={() => props.navigation.navigate("SpecificCoin")}
                />
              </View>
            );
          })}
          <TouchableOpacity style={styles._deposit_btn}>
            <Text style={styles._deposit_btn_text}>+ Deposit more coins</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("AllAssets")}>
            <Text style={styles._all_accets}>See All Assets</Text>
          </TouchableOpacity>

          <Text style={styles._card_heading}>Latest transactions</Text>
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
          <TouchableOpacity onPress={() => props.navigation.navigate("AllTransactions")}>
            <Text style={styles._all_accets}>See All Transactions</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 30 }}></View>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <Tabs path={props.navigation} />
      </View>
      {toashMessageShow ? (
        <View style={styles._toash_message_main}>
          <View style={styles._toash_category_main}>
            <View style={styles._toash_category_icon}>
              <Feather name="arrow-up-left" size={15} color="white" />
            </View>
            <Text style={styles._toash_message}>Successful withdrawal</Text>
          </View>
          <TouchableOpacity style={styles._toash_close_btn} onPress={()=> settoashMessageShow(false)}>
            <EvilIcons name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
export default WalletOverview;
