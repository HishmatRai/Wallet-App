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
    paddingHorizontal: 20,
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
    fontSize: 26,
  },
  _drawer_icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
