import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  _bg_color_btn: {
    width: wp("60%"),
    height: hp("6%"),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  _bg_color_btn_text: {
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 19,
  },
});
