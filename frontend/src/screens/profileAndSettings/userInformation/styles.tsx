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
    marginLeft:10
  },
  _data_main: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  _email_main: {
    borderBottomColor: "#CFD2D8",
    borderBottomWidth: 1,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("4%"),
  },
  _input: {
    color: "#B5BBC9",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
    width: wp("80%"),
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
  },
  _message:{
      textAlign:"center",
      marginHorizontal:20,
      fontFamily: "TitilliumWeb-Regular",
      color:"#485068",
      marginBottom:hp("4%"),
      fontSize:15
  }
});
