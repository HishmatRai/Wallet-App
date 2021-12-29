import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  _heading: {
    color: "#fff",
    fontFamily: "TitilliumWeb-Bold",
    fontSize: wp("7%"),
    marginLeft: 10,
  },
  _login_btn_main: {
    marginTop: hp("7%"),
    marginBottom: 10,
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
    marginTop: hp("5%"),
    justifyContent: "space-between",
  },

  _image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
  },
  _image2: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  _camera_main: {
    height: hp("32%"),
    width: "86%",
    alignSelf: "center",
  },
  _Camera: {
    width: "93%",
    height: hp("25%"),
    alignSelf: "center",
  },
  _message: {
    color: "#fff",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: 15,
    textAlign: "center",
    marginTop: hp("4%"),
  },
  _data_main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom:30
  },
});
