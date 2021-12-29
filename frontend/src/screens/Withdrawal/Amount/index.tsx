import React from "react";
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TextInput
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import BgColorButton from "../../../components/button/bgcolorbutton";
import Neo from "./../../../../assets/imagse/neo.svg";
import Stellar from "./../../../../assets/imagse/Stellar.svg";
import Bitcoin from "./../../../../assets/imagse/Bitcoin.svg";
import Ethereum from "./../../../../assets/imagse/Ethereum.svg";
import Litecoin from "./../../../../assets/imagse/Litecoin.svg";
import CombinedShape from "./../../../../assets/imagse/CombinedShape.svg";
import Shape from "./../../../../assets/imagse/switch.svg";
function Amount(props: any) {
    const [price, setPrice] = React.useState<string>("");
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
                <Text style={styles._heading}>Withdraw</Text>
                <View style={styles._drawer_icon} />
            </View>
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
            <View style={styles._exchange_btn_main}>
              {price === "" ? (
                <TouchableOpacity style={styles._exchange_btn_empty}>
                  <Text style={styles._exchange_btn_empty_text}>Next</Text>
                </TouchableOpacity>
              ) : (
                <BgColorButton
                  bgColor="#347AF0"
                  btnTextColor="#fff"
                  btnTitle="Next"
                  path={()=> props.navigation.navigate("WithdrawalAddress")}
                />
              )}
            </View>
        </View>
    );
}
export default Amount;
