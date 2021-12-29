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
    fontSize: 26,
    marginLeft: 10,
  },
  _data_main: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    marginTop:hp("8%")
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
    fontSize: hp("2%"),
  },
  _qr_code: {
    backgroundColor: "white",
    width: 160,
    height: 160,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: hp("4%"),
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  _qr_code_img: {
    width: "100%",
    height: "100%",
  },
  _link: {
    width: "60%",
    alignSelf: "center",
    marginTop: hp("3%"),
    color: "#78839C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2.5%"),
    textAlign: "center",
  },
  _copy_btn_text: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
    marginLeft: 5,
    textAlign: "center",
    marginTop:hp("3%"),
    marginBottom:hp("3%"),
  },
});
