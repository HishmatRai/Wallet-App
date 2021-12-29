import React from "react";
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
function TransactionConfirm(props: any) {
    let AmountDetails = [
        {
            title: "Receive amount",
            price: "42.431589 ETH"
        },
        {
            title: "Receive amount ($)",
            price: "$16,532.89"
        },
        {
            title: "Given amount",
            price: "1.281496 BTC"
        },
        {
            title: "Exchange fee",
            price: "0.0015 BTC"
        }, 
    ]
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
                <Text style={styles._heading}>Exchange</Text>
                <View style={styles._drawer_icon} />
            </View>
            <Text style={styles._message}>Confirm your transaction</Text>
            <View style={styles._data_main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._price_title}>Total receive amount</Text>
                    <Text style={styles._price}>42.134592 ETH</Text>
                    <Text style={styles._price_in_dollors}>$16,498.87</Text>
                    <View style={styles._line_main}>
                        <View style={styles._line_circle} />
                        <View style={styles._line} />
                        <View style={styles._line_circle} />
                    </View>
                    {AmountDetails.map((v, i) => {
                        return (
                            <View style={styles.user_data_main} key={i}>
                                <Text style={styles._title}>{v.title}</Text>
                                <Text style={styles._data}>{v.price}</Text>
                            </View>
                        )
                    })}
          <View style={styles._btn_main}>
            <BgColorButton
              bgColor="#347AF0"
              btnTextColor="#fff"
              btnTitle="Confirm"
              path={() => props.navigation.navigate("TransactionDetails")}
            />
          </View>
                </ScrollView>
            </View>
        </View>
    );
}
export default TransactionConfirm;
