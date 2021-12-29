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
    justifyContent:"space-between"
  },
  _img_main: {
    width: wp("100%"),
    height: hp("30%"),
    marginTop:hp("5%"),
    alignSelf:"center"
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
    fontSize: 20,
  },
  _toash_message_main: {
    backgroundColor: "#0D1F3C",
    position: "absolute",
    width: "86%",
    alignSelf: "center",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height:hp("7%"),
    marginTop:hp("3%")
  },
  _toash_category_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _toash_close_btn: {
    // backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _toash_category_icon: {
    backgroundColor: "#75BF72",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _toash_message: {
    color: "#fff",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 15,
    marginLeft: 10,
  },
});
