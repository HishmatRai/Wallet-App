import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#347af0",
  },
  _data_main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  _logo_main: {
    height: hp("20%"),
    width: wp("100%"),
    alignItems: "center",
    marginTop: hp("5%"),
  },
  _title: {
    color: "#FFFFFF",
    fontFamily: "TitilliumWeb-ExtraLight",
    fontSize: hp("4%"),
    marginTop: hp("3%"),
  },
  _heading: {
    color: "#FFFFFF",
    fontFamily: "TitilliumWeb-Light",
    fontSize: hp("6%"),
  },
  _sign_up_main: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  _account_title: {
    color: "white",
    fontFamily: "TitilliumWeb-Light",
    fontSize: hp("2%"),
  },
  _sign_up_btn_text: {
    color: "white",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2%"),
    marginLeft: 5,
  },
});
