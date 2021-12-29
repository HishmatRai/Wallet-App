import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import styles from "./styles";
import Tabs from "../../../components/tabs";
import { Feather, Ionicons, AntDesign,EvilIcons } from "@expo/vector-icons";
import Chart from "../../../components/chart";
import WalletCard from "../../../components/walletcard";
import Withdraw from "./../../../../assets/imagse/withdraw.svg";
import Trade from "./../../../../assets/imagse/trade.svg";
import Send from "./../../../../assets/imagse/send.svg";
import Pluscircle from "./../../../../assets/imagse/plus-circle.svg";
import Arrowupleftcircle from "./../../../../assets/imagse/arrow-up-left-circle.svg";
import Arrowdownrightcircle from "./../../../../assets/imagse/arrow-down-right-circle.svg";
import Arrowuprightcircle from "./../../../../assets/imagse/arrow-up-right-circle.svg";
import RBSheet from "react-native-raw-bottom-sheet";
import Neo from "./../../../../assets/imagse/neo.svg";
import Stellar from "./../../../../assets/imagse/Stellar.svg";
import Bitcoin from "./../../../../assets/imagse/Bitcoin.svg";
import Ethereum from "./../../../../assets/imagse/Ethereum.svg";
import Litecoin from "./../../../../assets/imagse/Litecoin.svg";
import CombinedShape from "./../../../../assets/imagse/CombinedShape.svg";
import Shape from "./../../../../assets/imagse/switch.svg";
import BgColorButton from "../../../components/button/bgcolorbutton";
import {Selling} from './../../../components/svg'
function SpecificCoin(props: any) {
  const [price, setPrice] = React.useState<string>("");
  const screenHeight = Dimensions.get("screen").height;
  const refRBSheet = useRef();
  const [toashMessageShow, settoashMessageShow] =
  React.useState<boolean>(false);
useEffect(() => {
  setTimeout(() => {
    settoashMessageShow(true);
  }, 2000);
}, []);
  let BitconButtonsData = [
    {
      icon: <Ethereum width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Ethereum",
    },
    {
      icon: <Bitcoin width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Ethereum",
    },
    {
      icon: <Stellar width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Steller",
    },
    {
      icon: <Litecoin width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Litecoin",
    },
    {
      icon: <Neo width={"100%"} height={"100%"} fill={"#000"} />,
      title: "Neo",
    },
  ];
  let LatestTransactions = [
    {
      icon: (
        <Arrowupleftcircle width={"100%"} height={"100%"} fill={"#DF5060"} />
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
        <Arrowdownrightcircle width={"100%"} height={"100%"} fill={"#75BF72"} />
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
        <Arrowuprightcircle width={"100%"} height={"100%"} fill={"#75BF72"} />
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
        <Arrowupleftcircle width={"100%"} height={"100%"} fill={"#DF5060"} />
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
        <Arrowdownrightcircle width={"100%"} height={"100%"} fill={"#75BF72"} />
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
        <Arrowuprightcircle width={"100%"} height={"100%"} fill={"#75BF72"} />
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
          <Text style={styles._header_heading}>Bitcoin</Text>
          <TouchableOpacity
            onPress={() => props.navigation.openDrawer()}
            style={styles._drawer_icon}
          >
            <Feather name="align-right" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles._price}>$24,825.90</Text>
        <Text style={styles._wallet_title}>0.8934 BTC</Text>
        <Chart />
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._list_main}>
            <View style={styles._list}>
              <TouchableOpacity style={styles._list_icon} >
                <Pluscircle width={"50%"} height={"50%"} fill={"#75BF72"} />
              </TouchableOpacity>
              <Text style={styles._list_title}>Deposit</Text>
            </View>
            <View style={styles._list}>
              <TouchableOpacity style={styles._list_icon} onPress={()=> props.navigation.navigate("Amount")}>
                <Withdraw width={"50%"} height={"50%"} fill={"#75BF72"} />
              </TouchableOpacity>
              <Text style={styles._list_title}>Withdraw</Text>
            </View>
            <View style={styles._list}>
              <TouchableOpacity style={styles._list_icon} onPress={()=> props.navigation.navigate("SendToFriend")}>
                <Send width={"50%"} height={"50%"} fill={"#75BF72"} />
              </TouchableOpacity>
              <Text style={styles._list_title}>Send</Text>
            </View>
            <View style={styles._list}>
              <TouchableOpacity
                style={styles._list_icon}
                onPress={() => refRBSheet.current.open()}
              >
                <Trade width={"50%"} height={"50%"} fill={"#75BF72"} />
              </TouchableOpacity>
              <Text style={styles._list_title}>Exchange</Text>
            </View>
          </View>
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
          <TouchableOpacity onPress={()=> props.navigation.navigate("AllTransactions")}>
            <Text style={styles._all_accets}>See All Transactions</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 30 }}></View>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <Tabs path={props.navigation} />
      </View>
      <RBSheet
        height={screenHeight - 120}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.7)",
          },
          draggableIcon: {
            backgroundColor: "transparent",
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "transparent",
            padding: 0,
            margin: 0,
          },
        }}
      >
        <View style={styles._bottom_sheet_main}>
          <TouchableOpacity
            style={styles._close_btn}
            onPress={() => refRBSheet.current.close()}
          >
            <AntDesign name="close" size={15} color="#0D1F3C" />
          </TouchableOpacity>
          <Text style={styles._heading}>Buying</Text>
          <View style={styles.bitcoin_btn_main}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {BitconButtonsData.map((v, i) => {
                return (
                  <TouchableOpacity style={styles.bitcoin_btn} key={i}>
                    <View style={styles.bitcoin_icon_main}>{v.icon}</View>
                    <Text style={styles.bitcoin_btn_text}>{v.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles._enter_price_main}>
            <View style={styles._enter_price_Column} />
            <View style={styles._enter_price_Column}>
              <TextInput
                placeholder="0.00"
                value={price}
                onChangeText={(price) => setPrice(price)}
                style={styles._input}
                underlineColor="#B5BDCC"
                placeholderTextColor="#B5BDCC"
                keyboardType={"numeric"}
              />
              {price === "" ? (
                <Text style={styles._convert_to_doller}>$0.00</Text>
              ) : (
                <Text style={styles._convert_to_doller}>$16,532.89</Text>
              )}
            </View>
            <View style={styles._enter_price_Column}>
              <View style={styles._CombinedShape_icon}>
                <CombinedShape width={"100%"} height={"100%"} fill={"#000"} />
              </View>
            </View>
          </View>
          <View style={styles.selling_main}>
            <View style={styles._exchange_btn}>
              <Selling />
            </View>
            <Text style={styles._heading}>Selling</Text>
            <View style={styles.bitcoin_btn_main}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {BitconButtonsData.map((v, i) => {
                  return (
                    <TouchableOpacity style={styles.bitcoin_btn2} key={i}>
                      <View style={styles.bitcoin_icon_main}>{v.icon}</View>
                      <Text style={styles.bitcoin_btn_text}>{v.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <Text style={styles._available}>4.7845 BTC Available</Text>
            {price === "" ? (
              <Text style={styles._exchange_price}>0.00</Text>
            ) : (
              <Text style={styles._exchange_price2}>1.281496</Text>
            )}
            <View style={styles._exchange_btn_main}>
              {price === "" ? (
                <TouchableOpacity style={styles._exchange_btn_empty}>
                  <Text style={styles._exchange_btn_empty_text}>Exchange</Text>
                </TouchableOpacity>
              ) : (
                <BgColorButton
                  bgColor="#347AF0"
                  btnTextColor="#fff"
                  btnTitle="Exchange"
                  path={()=> props.navigation.navigate("TransactionConfirm")}
                />
              )}
            </View>
          </View>
        </View>
      </RBSheet>
      {toashMessageShow ? (
        <View style={styles._toash_message_main}>
          <View style={styles._toash_category_main}>
            <View style={styles._toash_category_icon}>
              <Ionicons name="md-close" size={15} color="white" />
            </View>
            <Text style={styles._toash_message}>Rejected withdraw</Text>
          </View>
          <TouchableOpacity style={styles._toash_close_btn} onPress={()=> settoashMessageShow(false)}>
            <EvilIcons name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
export default SpecificCoin;
