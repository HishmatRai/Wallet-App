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
    textAlign: "center",
    marginTop: hp("2%"),
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: wp("7%"),
    marginBottom: hp("3%"),
  },
  _header_img_main: {
    width: wp("100%"),
    height: hp("30%"),
  },
  _data_main: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
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
    color: "#3D4C63",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
    width:wp("80%")
  },
  _forgot_password: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    marginTop: hp("1%"),
    fontSize: wp("5%"),
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
  _login_btn_main: {
    marginTop: hp("20%"),
  },
  _sign_up_main: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
  },
  _account_title: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Light",
    fontSize: hp("2%"),
  },
  _sign_up_btn_text: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2%"),
    marginLeft: 5,
  },
});
