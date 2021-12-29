import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F9",
  },
  back_icon: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginTop: hp("4%"),
  },
  _data_main: {
    backgroundColor: "white",
    flex: 1,
    marginTop: hp("2%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  _profile_image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
    marginTop: -50,
  },
  _user_name: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("7%"),
    textAlign: "center",
    marginTop: hp("1.5%"),
  },
  _list_btns: {
    backgroundColor: "#EDF1F9",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: hp("8%"),
    marginTop: hp("3%"),
  },
  _list_btns_text: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2.5%"),
  },
  _list_btns_text_verified:{
    color: "#78839C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2.5%"),
  },
  _change_btn_text:{
    color: "#002E75",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: wp("4.5%"),
  },
  _setting:{
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
    marginTop:hp("2%")
  },
  _currency:{
      flexDirection:"row",
      alignItems:"center"
  },
  _select_currency:{
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: wp("4%"),
    marginRight:5
  }
});
