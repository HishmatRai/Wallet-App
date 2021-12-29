import React from "react";
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
} from "react-native";
import styles from "./styles";
import BgColorButton from "../../../components/button/bgcolorbutton";
import { Plus } from './../../../components/svg';
import { Feather } from '@expo/vector-icons';
function TransactionDetails(props: any) {
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
        {
            title: "Total receive amount",
            price: "42.134592 ETH"
        },
        {
            title: "Total reveive amount ($)",
            price: "$16,498.87"
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
                <View
                    style={styles._drawer_icon}
                />
                <Text style={styles._heading}>Transaction Details</Text>
                <View style={styles._drawer_icon} />
            </View>
            <View style={styles._data_main}>
                <View style={styles._exchange_icons_main}>
                    <Plus />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._price_title}>Exchanged</Text>
                    <View style={styles._date_main}>
                        <View style={styles.date_data_main} >
                            <Text style={styles._title}>Date</Text>
                            <Text style={styles._data}>18 Nov, 2019</Text>
                        </View>
                        <View style={styles.date_data_main} >
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
                        )
                    })}
                    <View style={styles.status_main} >
                        <Text style={styles._title}>Status</Text>
                        <View style={styles._Transaction_confirmed_main}>
                            <Text style={styles._Transaction_confirmed}>Transaction confirmed</Text>
                            <Feather name="external-link" size={24} color="#347AF0" />
                        </View>
                    </View>
                    <View style={styles.user_data_main} >
                        <Text style={styles._title}>Transaction ID</Text>
                        <Text style={styles._data}>3M8w2knJKsr3jqMatYiyuraxVvZA</Text>
                    </View>
                    <View style={styles.user_data_main} >
                        <Text style={styles._title}>To</Text>
                        <View style={styles._Transaction_confirmed_main}>
                            <Image source={require("./../../../../assets/imagse/profile.jpg")} style={styles._profile_image} />
                            <Text style={styles._data}>Mattie Hardwick</Text>
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
export default TransactionDetails;
