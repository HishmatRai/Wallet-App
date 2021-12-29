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
    // paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: hp("5%"),
  },
  _email_main: {
    borderBottomColor: "#B5BBC9",
    borderBottomWidth: 1,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("4%"),
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  _email_main2: {
    borderBottomColor: "#347AF0",
    borderBottomWidth: 1,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("4%"),
    marginHorizontal: 20,
    paddingBottom: 10,
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
  _user_name: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
    marginLeft: 10,
  },
  _user_name_main: {
    marginLeft: 10,
  },
  _profile_main: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  emoji_main: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: hp("3%"),
  },
  emoji_btn_main: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "white",
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  emoji_btn_active_main: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "white",
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#347AF0",
  },
  __btn_main:{
    marginTop:hp("5%")
  }
});
