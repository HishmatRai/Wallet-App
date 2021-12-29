import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf1f9",
    height: hp("100%"),
  },
  _data_main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: hp("3%"),
  },
  _header_heading: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("4%"),
  },
  _title: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize:15,
    textAlign: "center",
    marginTop: hp("2%"),
  },
  _img_main: {
    width: wp("100%"),
    height: hp("40%"),
    alignItems:"center"
  },
  _drawer_icon:{
    width:40,
    height:40,
    borderRadius:40/2,
    alignItems:"center",
    justifyContent:"center"
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
