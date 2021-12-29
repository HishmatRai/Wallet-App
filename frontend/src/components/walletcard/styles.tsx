import { BackHandler, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  _card_main: {
    backgroundColor: "#EDF1F9",
    marginTop: hp("2%"),
    height: hp("10%"),
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_icon_main: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35 / 2,
  },
  _icon_and_heading_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  card_title_main: {
    marginLeft: 10,
  },
  _card_title: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
  },
  _card_price: {
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
  },
  _catageroy: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: wp("4%"),
  },
  _card_avarage: {
    fontSize: wp("4%"),
  },
  _card_price_main: {
    alignItems: "flex-end",
  },
});
