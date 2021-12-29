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
    marginBottom: hp("3%"),
    marginTop: hp("2%"),
  },
  _message: {
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "TitilliumWeb-Regular",
    color: "#485068",
    marginBottom: hp("4%"),
    fontSize: 15,
  },
  _progress_main: {
    backgroundColor: "#E0E9F8",
    width: wp("70%"),
    height: 4,
    marginBottom: hp("5%"),
    alignSelf: "center",
    borderRadius: 50,
  },
  _progress_done: {
    backgroundColor: "#347AF0",
    width: "80%",
    height: 4,
  },
  _otp_show:{
      height: hp("7%"),
      paddingHorizontal:40,
      marginTop:hp("3%")
  },
  _verify_btn_main:{
      marginTop:hp("10%")
  }
});
