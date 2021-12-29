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
    color: "#3D4C63",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
    width: wp("80%"),
  },
  _login_btn_main: {
    marginTop: hp("10%"),
    marginBottom:10
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
  _progress_main: {
    backgroundColor: "#E0E9F8",
    width: wp("70%"),
    height: 4,
    marginBottom: hp("5%"),
    alignSelf:"center",
    borderRadius:50
  },
  _progress_done:{
    backgroundColor:"#347AF0",
    width: "20%",
    height: 4,
  }
});
