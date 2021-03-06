import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#347AF0",
    height: hp("100%"),
  },
  _data_main: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: hp("3%"),
    backgroundColor: "#347AF0",
  },
  _header_heading: {
    color: "#fff",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("4%"),
  },
  _drawer_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _price: {
    color: "#fff",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: hp("4%"),
    textAlign: "center",
    marginTop: hp("2%"),
  },
  _wallet_title: {
    color: "#fff",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    textAlign: "center",
  },
  _card_heading: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("3%"),
  },
  _all_accets: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2.5%"),
    marginTop: hp("3%"),
    textAlign: "center",
    marginBottom: hp("2%"),
  },
  _list_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp("4%"),
  },
  _list: {
    width: "25%",
    alignItems: "center",
  },
  _list_icon: {
    backgroundColor: "#EDF1F9",
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  _list_title: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2.3%"),
  },
  _close_btn: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  _bottom_sheet_main: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
  },
  _heading: {
    textAlign: "center",
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("6%"),
  },
  bitcoin_btn: {
    backgroundColor: "#EDF1F9",
    marginLeft: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  bitcoin_btn2: {
    backgroundColor: "#fff",
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
  _enter_price_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: hp("4%"),
  },
  _enter_price_Column: {
    width: "33%",
    alignItems: "center",
  },
  _input: {
    color: "#3783F5",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 42,
    width: "100%",
    textAlign: "center",
  },
  _CombinedShape_icon: {
    width: "20%",
    height: hp("6%"),
    alignSelf: "flex-end",
  },
  _convert_to_doller: {
    color: "#B5BBC9",
    fontFamily: "TitilliumWeb-Regular",
    fontSize:19,
    alignItems: "center",
  },
  selling_main: {
    backgroundColor: "#EDF1F9",
    flex: 1,
    marginTop: hp("8%"),
  },
  _exchange_btn: {
    backgroundColor: "#347AF0",
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignSelf:"center",
    marginTop:-30,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  _available:{
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    alignItems: "center",
    alignSelf:"center",
    marginTop:hp("2%")
  },
  _exchange_price:{
    color: "#B5BBC9",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 36,
    textAlign: "center",
    marginTop:hp("2%")
  },
  _exchange_price2:{
    color: "#347AF0",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 36,
    textAlign: "center",
    marginTop:hp("2%")
  },
  _exchange_btn_empty: {
    borderWidth: 1,
    borderColor: "#B5BBC9",
    width: "60%",
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    height: hp("6%"),
    justifyContent: "center",
  },
  _exchange_btn_empty_text:{
    color: "#B5BBC9",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
  },
  _exchange_btn_main:{
    marginTop:hp("2%")
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
    backgroundColor: "#DF5060",
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
