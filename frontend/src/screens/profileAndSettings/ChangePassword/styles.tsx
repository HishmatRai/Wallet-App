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
    justifyContent: "space-between",
  },
  _email_main: {
    borderBottomColor: "#CFD2D8",
    borderBottomWidth: 1,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("8%"),
  },
  _input: {
    color: "#3D4C63",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: wp("5%"),
    width: wp("80%"),
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
    color:"#B5BBC9"
  },
  _btn_main:{
      marginTop:hp("8%")
  }
});
