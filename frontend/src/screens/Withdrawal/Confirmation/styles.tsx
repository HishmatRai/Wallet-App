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
  _data_main: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 20,
    marginTop: hp("10%"),
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
  _message: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    textAlign: "center",
  },
  _price_title: {
    color: "#B5BBC9",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: hp("2%"),
    textAlign: "center",
    marginTop: hp("2"),
  },
  _line_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: -10,
    marginTop: hp("2%"),
  },
  _line_circle: {
    backgroundColor: "#edf1f9",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  _line: {
    backgroundColor: "#fff",
    height: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "#edf1f9",
    borderStyle: "dashed",
    flex: 1,
  },
  user_data_main: {
    marginHorizontal: 20,
    marginTop: hp("2%"),
  },
  _title: {
    color: "#B5BBC9",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 15,
  },
  _data: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
  },
  _btn_main: {
    marginTop: hp("4%"),
    marginBottom: 10,
  },
  _link:{
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
    width:"70%",
    alignSelf:"center",
    textAlign:"center",
    marginTop:hp("1%")
  }
});
