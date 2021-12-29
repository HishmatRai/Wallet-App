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
    _data_main: {
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: 20,
        marginTop: hp("10%")
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
    _reject_title:{
        color: "#DF5060",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize:15,
        textAlign: "center",
        marginTop: hp("2")
    },
    user_data_main: {
        marginHorizontal: 20,
        marginTop: hp("2%"),
    },
    date_data_main: {
        marginTop: hp("2%"),
        width: "50%",
    },
    _title: {
        color: "#B5BBC9",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: hp("2.3%"),
    },
    _data: {
        color: "#0D1F3C",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 19,
    },
    _btn_main: {
        marginTop: hp("4%"),
        marginBottom: 10
    },
    _reject_icons_main:{
        backgroundColor: "#DF5060",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30
    },
    _date_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        borderBottomColor: "#D8D8D8",
        borderBottomWidth: 1,
        paddingBottom: 15
    },
    status_main: {
        marginHorizontal: 20,
        marginTop: hp("2%"),
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8",
        paddingBottom: 15
    },
    _Transaction_confirmed_main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _Transaction_confirmed:{
        color: "#347AF0",
        fontFamily: "TitilliumWeb-SemiBold",
        fontSize: 19,
        marginRight:5
    },
});
