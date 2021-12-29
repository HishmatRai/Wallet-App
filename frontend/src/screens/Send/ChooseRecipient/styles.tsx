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
    fontSize: hp("3%"),
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
  _title: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    textAlign: "center",
  },
  _data_main: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: hp("5%"),
  },
  _email_main: {
    borderBottomColor: "#CFD2D8",
    borderBottomWidth: 1,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("4%"),
  },
  _input: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: 19,
    width: wp("80%"),
  },
  _profile_img: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  _user_list_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("3%"),
  },
  _user_name: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
  },
  _user_name_main: {
    marginLeft: 10,
  },
  _mob_num:{
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize:15,
  }
});
