import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import Tabs from "../../../components/tabs";
import { Feather } from "@expo/vector-icons";
import TransactionsScreenImg from "./../../../../assets/imagse/TransactionsScreenImg.svg";
import BgColorButton from "../../../components/button/bgcolorbutton";
import { Ionicons } from '@expo/vector-icons';
function Transactions(props:any) {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#edf1f9"
                translucent={false}
            />
            <View style={styles._data_main}>
                <View>
                    <View style={styles._header_main}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles._drawer_icon}>
                            <Ionicons name="chevron-back-sharp" size={24} color="#0D1F3C" />
                        </TouchableOpacity>
                        <Text style={styles._header_heading}>All Transactions</Text>
                        <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={styles._drawer_icon}>
                            <Feather name="align-right" size={24} color="#0D1F3C" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles._title}>
                    Make your first deposit for your transactions to{'\n'} become visible here.
                    </Text>
                </View>
                <View style={styles._img_main}>
                    <TransactionsScreenImg width={"80%"} height={"80%"} fill={"#000"} />
                </View>
                <BgColorButton
                    bgColor="#347AF0"
                    btnTextColor="#fff"
                    btnTitle="Deposit Coins"
                // path={() => props.navigation.navigate("EnterPin")}
                />
            </View>
            <Tabs path={props.navigation}/>
        </View>
    );
}
export default Transactions;
