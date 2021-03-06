import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    backgroundColor: "#EDF1F9",
    borderWidth: 1,
    borderColor: "#b5bbc9",
    width: wp("100%"),
    height: hp("10%"),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  _add_btn: {
    backgroundColor: "#3783F5",
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
    marginTop: -35,
    alignItems: "center",
    justifyContent: "center",
  },
  _tab: {
    alignItems: "center",
    width: "30%",
  },
  _tab_title: {
    color: "#78839C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: wp("4%"),
  },
  _close_btn: {
    backgroundColor: "#347AF0",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -25,

    zIndex: 1,
    position: "absolute",
    borderWidth: 3,
    borderColor: "#EDF1F9",
  },
  _bottom_sheet_main: {
    backgroundColor: "#EDF1F9",
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  _heading: {
    textAlign: "center",
    marginTop: hp("7%"),
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("6%"),
  },
  bitcoin_btn: {
    backgroundColor: "white",
    marginLeft: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
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
    width: "50%",
    alignSelf: "center",
    marginTop: hp("3%"),
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: wp("5%"),
    textAlign: "center",
  },
  _copy_btn_main: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("3%"),
    alignItems: "center",
  },
  _copy_btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  _line: {
    width: 2,
    height: 20,
    backgroundColor: "#BCC5D3",
    marginHorizontal: 20,
  },
  _copy_btn_text:{
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
    marginLeft:5
  }
});
