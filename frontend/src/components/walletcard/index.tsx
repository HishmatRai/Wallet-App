import React from "react";
import { TouchableOpacity, Text, View } from 'react-native';
import styles from "./styles";
function WalletCard(props:any) {
    return (
        <TouchableOpacity style={styles._card_main} onPress={props.screenPath}>
            <View style={styles._icon_and_heading_main}>
                <View style={styles._card_icon_main}>
                    {props.icon}
                </View>
                <View style={styles.card_title_main}>
                    <Text style={styles._card_title}>{props.title}</Text>
                    <Text style={styles._catageroy}>{props.subTitle}</Text>
                </View>
            </View>
            <View style={styles._card_price_main}>
                <Text style={[
                        styles._card_price,
                        {color:props.priceTextColor}
                        ]}>{props.price}</Text>
                <Text style={[
                    styles._card_avarage,
                    {color:props.avarageTextColor},
                    {fontFamily:props.averageTextFontFamily}
                    ]}>{props.avarage}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default WalletCard;