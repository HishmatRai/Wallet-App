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
  _header_main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
    justifyContent: "space-between",
  },
  _heading: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: wp("5%"),
  },
  _title: {
    color: "#485068",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: hp("2%"),
    marginHorizontal: 20,
    textAlign: "center",
    marginTop:wp("2%")
  },
  _input_main:{
      flex:1,
     flexDirection:"column",
     alignItems:"flex-end",
     justifyContent:"flex-end",
     paddingBottom:hp("10%")
  }
});
