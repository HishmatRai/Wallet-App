import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf1f9",
    },
    _heading: {
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: hp("3%"),
    },
    _drawer_icon: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp("2%"),
        justifyContent: "space-between"
    },
    bitcoin_btn_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp("3%"),
      },
      bitcoin_btn_text: {
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: wp("5%"),
      },
      bitcoin_icon_main: {
        width: 28,
        height: 28,
        marginRight: 20,
      },
      bitcoin_btn: {
        backgroundColor: "#fff",
        marginLeft: 10,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
      },
      _enter_price_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: hp("4%"),
      },
      _enter_price_Column: {
        width: "33%",
        alignItems: "center",
      },
      _input: {
        color: "#3783F5",
        fontFamily: "TitilliumWeb-Bold",
        fontSize: 42,
        width: "100%",
        textAlign: "center",
      },
      _convert_to_doller: {
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-Regular",
        fontSize: 19,
        alignItems: "center",
      },
      _CombinedShape_icon: {
        width: "20%",
        height: hp("6%"),
        alignSelf: "flex-end",
      },
      _exchange_btn_empty: {
        borderWidth: 1,
        borderColor: "#B5BBC9",
        width: "60%",
        borderRadius: 50,
        alignSelf: "center",
        alignItems: "center",
        height: hp("6%"),
        justifyContent: "center",
      },
      _exchange_btn_empty_text:{
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: wp("5%"),
      },
      _exchange_btn_main:{
        marginTop:hp("10%")
      }
});
