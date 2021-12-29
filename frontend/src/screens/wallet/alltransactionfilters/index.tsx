import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Tabs from "../../../components/tabs";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import WalletCard from "../../../components/walletcard";
import Withdraw from "./../../../../assets/imagse/withdraw.svg";
import Trade from "./../../../../assets/imagse/trade.svg";
import Send from "./../../../../assets/imagse/send.svg";
import Pluscircle from "./../../../../assets/imagse/plus-circle.svg";
import RBSheet from "react-native-raw-bottom-sheet";
import { TransactionsLeftCircleArrow, TransactionsDownRightCircleArrow, TransactionsUpRightCircleArrow } from './../../../components/svg'
function AllTransactionFilters(props: any) {
  const refRBSheet = useRef();
  const [activeBtn, setActiveBtn] = useState<number>(3);
  const [clickType, setClickType] = useState<number>(0);
  console.log(clickType)
  let TransactonTypeBtn = () => {
    refRBSheet.current.open();
    setClickType(1)
  }
  let CoinsTypeBtn = () => {
    refRBSheet.current.open();
    setClickType(2)
  }
  let ChoseaDataTypeBtn = () => {
    refRBSheet.current.open();
    setClickType(3)
  }
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
  let Alltyp = [
    {
      heading: "Deposited",
      typeIcon: <Pluscircle width={"50%"} height={"50%"} fill={"#75BF72"} />,
    },
    {
      heading: "Deposited",
      typeIcon: <Withdraw width={"50%"} height={"50%"} fill={"#75BF72"} />,
    },
    {
      heading: "Deposited",
      typeIcon: <Send width={"50%"} height={"50%"} fill={"#75BF72"} />,
    },
    {
      heading: "Deposited",
      typeIcon: <Trade width={"50%"} height={"50%"} fill={"#75BF72"} />,
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
        <TouchableOpacity style={styles._drawer_icon}>
          <AntDesign name="close" size={24} color="#347AF0" />
        </TouchableOpacity>
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles._coin_btn_main}>
              {clickType !== 0 ?
                <TouchableOpacity style={styles._clear_btn}>
                  <Text style={styles._clear_btn_text}>Clear all</Text>
                </TouchableOpacity>
                : null}
              <TouchableOpacity
                style={clickType === 1 ? styles._coin_btn_click : styles._coin_btn}
                onPress={TransactonTypeBtn}
              >
                <Text style={clickType === 1 ? styles._coin_btn_text_click : styles._coin_btn_text}>Transacton type</Text>
                {clickType === 1 ?
                  <View style={styles._click_counter_main}>
                    <Text style={styles._click_counter}>1</Text>
                  </View>
                  : null}
                {clickType === 1 ?
                  <Entypo name="chevron-small-down" size={24} color="#fff" />
                  :
                  <Entypo name="chevron-small-down" size={24} color="#485068" />
                }
              </TouchableOpacity>
              <TouchableOpacity
                style={clickType === 2 ? styles._coin_btn_click : styles._coin_btn}
                onPress={CoinsTypeBtn}
              >
                <Text style={clickType === 2 ? styles._coin_btn_text_click : styles._coin_btn_text}>Coins</Text>
                {clickType === 2 ?
                  <View style={styles._click_counter_main}>
                    <Text style={styles._click_counter}>1</Text>
                  </View>
                  : null}
                {clickType === 2 ?
                  <Entypo name="chevron-small-down" size={24} color="#fff" />
                  :
                  <Entypo name="chevron-small-down" size={24} color="#485068" />
                }
              </TouchableOpacity>
              <TouchableOpacity
                style={clickType === 3 ? styles._coin_btn_click : styles._coin_btn}
                onPress={ChoseaDataTypeBtn}
              >
                <Text style={clickType === 3 ? styles._coin_btn_text_click : styles._coin_btn_text}>Choose a date</Text>
                {clickType === 3 ?
                  <View style={styles._click_counter_main}>
                    <Text style={styles._click_counter}>1</Text>
                  </View>
                  : null}
                {clickType === 3 ?
                  <Entypo name="chevron-small-down" size={24} color="#fff" />
                  :
                  <Entypo name="chevron-small-down" size={24} color="#485068" />
                }
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles._coin_btn} onPress={CoinsTypeBtn}>
                <Text style={styles._coin_btn_text}>Coins</Text>
                <Entypo name="chevron-small-down" size={24} color="#485068" />
              </TouchableOpacity>
              <TouchableOpacity style={styles._coin_btn} onPress={ChoseaDataTypeBtn}>
                <Text style={styles._coin_btn_text}>Choose a date</Text>
                <Entypo name="chevron-small-down" size={24} color="#485068" />
              </TouchableOpacity> */}
            </View>
          </ScrollView>
          {LatestTransactions.map((v, i) => {
            return (
              <View key={i} style={{ paddingHorizontal: 20 }}>
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
      <RBSheet
        height={400}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.7)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <View style={styles._bottm_Sheet_main}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles._bottom_sheet_header}>
              <Text style={styles._bottom_sheet_header_heading}>
                Transactions type
              </Text>
              <TouchableOpacity onPress={()=> props.navigation.navigate("WithdrawalTransactionDetails")}>
                <Text style={styles._done_btn_text}>Done</Text>
              </TouchableOpacity>
            </View>
            <View style={styles._select_all_main}>
              <TouchableOpacity style={styles._select_all_btn}>
                <Text style={styles._select_all_btn_text}>Select All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles._select_all_btn}>
                <Text style={styles._select_all_btn_text}>Clear All</Text>
              </TouchableOpacity>
            </View>
            {Alltyp.map((v, i) => {
              return (
                <TouchableOpacity
                key={i}
                  onPress={() => setActiveBtn(i)}
                  style={
                    activeBtn === i
                      ? {
                        flexDirection: "row",
                        alignItems: "center",
                        paddingBottom: 10,
                        marginBottom: 5,
                        paddingTop: 5,
                        justifyContent: "space-between",
                        marginTop: 5,
                      }
                      : {
                        flexDirection: "row",
                        alignItems: "center",
                        paddingBottom: 10,
                        marginBottom: 5,
                        paddingTop: 5,
                        justifyContent: "space-between",
                        marginTop: 5,
                      }
                  }
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={styles._select_type_icon}>
                      {v.typeIcon}
                    </TouchableOpacity>
                    <Text style={styles._select_type_heading}>{v.heading}</Text>
                  </View>
                  <View
                    style={
                      activeBtn === i
                        ? {
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          borderColor: "#347AF0",
                          borderWidth: 2,
                          backgroundColor: "#347AF0",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                        : {
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                          borderColor: "#D8D8D8",
                          borderWidth: 2,
                          alignItems: "center",
                          justifyContent: "center",
                        }
                    }
                  >
                    {activeBtn === i ? (
                      <Ionicons name="ios-checkmark" size={12} color="white" />
                    ) : (
                      <Ionicons name="ios-checkmark" size={12} color="white" />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
}
export default AllTransactionFilters;
