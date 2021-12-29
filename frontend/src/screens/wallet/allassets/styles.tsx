import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F9",
    height: hp("100%"),
  },
  _data_main: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: hp("3%"),
    backgroundColor: "#EDF1F9",
    marginBottom: hp("5%"),
  },
  _header_heading: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("4%"),
  },
  _drawer_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _coin_btn_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _coin_btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  _coin_btn_text: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
  },
});
