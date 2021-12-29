import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F9",
    height: hp("100%"),
  },
  _data_main: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: hp("3%"),
    backgroundColor: "#EDF1F9",
    marginBottom: hp("5%"),
  },
  _header_heading: {
    color: "#0D1F3C",
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
  _coin_btn_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _coin_btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5FB",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginLeft: 15,
    marginRight:5
  },
  _coin_btn_click: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3783F5",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginLeft: 15,
    marginRight:5
  },
  _clear_btn: {
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginLeft: 20,
  },
  _coin_btn_text: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    marginRight: 5,
  },
  _coin_btn_text_click: {
    color: "#fff",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    marginRight: 5,
  },
  _clear_btn_text: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2%"),
    marginRight: 5,
  },
  _bottm_Sheet_main: {
    marginHorizontal: 20,
  },
  _bottom_sheet_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _bottom_sheet_header_heading: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
  },
  _done_btn_text: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize:19,
  },
  _select_all_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("3%"),
    marginBottom: hp("2%")
  },
  _select_all_btn: {
    backgroundColor: "#F1F5FB",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
  _select_all_btn_text: {
    color: "#347AF0",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 15,
  },
  _select_type_icon: {
    backgroundColor: "#EDF1F9",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  _select_type_heading: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
    marginLeft: 10,
  },
  _click_counter_main: {
    backgroundColor: "white",
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:5
  },
  _click_counter:{
    color:"#3783F5",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: 10,
  }
});
