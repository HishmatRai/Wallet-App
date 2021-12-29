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
  _header_main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
    justifyContent: "space-between",
  },
  _heading: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: wp("5%"),
  },
  _title: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    marginHorizontal: 20,
    textAlign: "center",
    marginTop:wp("2%")
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
  _header_img_main: {
    width: wp("100%"),
    height: hp("30%"),
  },
  _header_img_main2:{
    width: wp("100%"),
    height: hp("15%"),
  },
  _login_btn_main: {
    marginTop: hp("10%"),
  },
});
