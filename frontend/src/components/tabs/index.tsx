import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Image, Share,Dimensions  } from "react-native";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import Neo from "./../../../assets/imagse/neo.svg";
import Stellar from "./../../../assets/imagse/Stellar.svg";
import Bitcoin from "./../../../assets/imagse/Bitcoin.svg";
import Ethereum from "./../../../assets/imagse/Ethereum.svg";
import Litecoin from "./../../../assets/imagse/Litecoin.svg";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { TabsTransactions, TabsPortfolio } from "./../../components/svg";
function Tabs(props: any) {
  const screen = Dimensions.get("screen");
  const refRBSheet = useRef();
  const copyToClipboard = () => {
    Clipboard.setString("3M8w2knJKsr3jqMatY iyuraxVvZAmuZ");
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles._tab} onPress={()=> props.path.navigate("AllTransactions")}>
          <TabsTransactions />
          <Text style={styles._tab_title}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._tab}
          onPress={() => refRBSheet.current.open()}
        >
          <View style={styles._add_btn}>
            <AntDesign name="plus" size={24} color="white" />
          </View>
          <Text style={styles._tab_title}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._tab}
          onPress={() => props.path.navigate("WalletOverview")}
        >
          <TabsPortfolio />
          <Text style={styles._tab_title}>Portfolio</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        height={screen.height - 200}
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
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles._heading}>Deposit Coins</Text>
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
            <View style={styles._qr_code}>
              <Image
                source={require("./../../../assets/imagse/qrcode.png")}
                style={styles._qr_code_img}
              />
            </View>
            <Text style={styles._link}>3M8w2knJKsr3jqMatY iyuraxVvZAmuZ</Text>
            <View style={styles._copy_btn_main}>
              <TouchableOpacity
                style={styles._copy_btn}
                onPress={copyToClipboard}
              >
                <Feather name="copy" size={24} color="#347AF0" />
                <Text style={styles._copy_btn_text}>Copy</Text>
              </TouchableOpacity>
              <View style={styles._line} />
              <TouchableOpacity style={styles._copy_btn} onPress={onShare}>
                <Feather name="share" size={24} color="#347AF0" />
                <Text style={styles._copy_btn_text}>Share</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
}
export default Tabs;
