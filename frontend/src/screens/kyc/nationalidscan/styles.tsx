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
  },
  _progress_main: {
    backgroundColor: "#E0E9F8",
    width: wp("70%"),
    height: 4,
    marginBottom: hp("5%"),
    alignSelf: "center",
    borderRadius: 50,
  },
  _progress_done: {
    backgroundColor: "#347AF0",
    width: "80%",
    height: 4,
  },
  _message: {
    color: "#485068",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "TitilliumWeb-Regular",
    fontSize: 15,
  },
  _heading_card: {
    color: "#B5BBC9",
    textAlign: "center",
    marginTop: hp("3%"),
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize:26,
  },
  _card_img_main: {
    height: hp("30%"),
    marginTop:hp("2%"),
    marginBottom:hp("3%"),
    alignItems:"center"
  },
  _card_img: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  _scan_again_btn_text:{
    color: "#347AF0",
    textAlign: "center",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
  },
  _bottom_btn_main:{
      marginTop:hp("5%"),
      marginBottom:20
  }
});
