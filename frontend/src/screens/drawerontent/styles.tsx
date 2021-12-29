import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  sideMenuContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 20,
  },
  _profile_img: {
    width: 68,
    height: 68,
    borderRadius: 68 / 2,
    // alignSelf:"center",
    marginTop: hp("5%"),
    marginLeft: 20,
  },
  _user_name: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize:19,
    marginTop: hp("2%"),
    marginLeft: 20,
  },
  _progress: {
    color: "#FDB32A",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 15,
    marginLeft: 20,
  },
  _pages: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-Regular",
    fontSize: 19,
    marginLeft: 10,
  },
  _dwawer_list_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _icons_main: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems:"center",
    justifyContent:"center",
    // borderWidth:2,
    // borderColor:"#fff",
    // backgroundColor:"red"
  },
});

export default styles;
