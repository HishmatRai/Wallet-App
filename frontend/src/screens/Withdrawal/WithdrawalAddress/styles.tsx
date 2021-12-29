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
    fontSize: wp("7%"),
    marginLeft: 10,
  },
  _data_main: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    marginTop: hp("8%"),
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
    justifyContent: "space-between",
  },
  _message: {
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "TitilliumWeb-Regular",
    color: "#485068",
    marginBottom: hp("4%"),
    fontSize: hp("2%"),
  },

  _copy_btn_text: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2%"),
    marginLeft: 5,
    textAlign: "center",
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
  },
  _email_main: {
    borderBottomColor: "#CFD2D8",
    borderBottomWidth: 1,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("4%"),
  },
  _input: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    width: wp("75%"),
  },
  _bg_color_btn: {
    width: wp("60%"),
    height: hp("6%"),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#B5BBC9",
  },
  _bg_color_btn_text: {
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
    color: "#B5BBC9",
  },
});
