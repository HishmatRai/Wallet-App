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
  _message: {
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "TitilliumWeb-Regular",
    color: "#485068",
    marginBottom: hp("4%"),
    fontSize: 15,
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
    width: "20%",
    height: 4,
  },
  _country_code_picker: {
    backgroundColor: "#EDF1F9",
    marginTop: hp("5%"),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: hp("7%"),
  },
  _email_main: {
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("4%"),
    borderBottomColor: "#CFD2D8",
    borderBottomWidth: 1,
  },
  _input: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
    width: wp("70%"),
  },
  _code: {
    color: "#0D1F3C",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
  },
  _submit_btn_empty: {
    borderWidth: 1,
    borderColor: "#B5BBC9",
    width: "60%",
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    height: hp("6%"),
    justifyContent: "center",
  },
  _submit_btn_empty_text:{
    color: "#B5BBC9",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
  },
  _submit_btn_text:{
    color: "#fff",
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: wp("5%"),
  },
  _submit_btn:{
    borderWidth: 1,
    borderColor: "#347AF0",
    width: "60%",
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    height: hp("6%"),
    justifyContent: "center",
    backgroundColor:"#347AF0"
  },
  _submit_btn_main:{
    marginTop:hp("40%"),
  },
  _submit_btn_main_foucus:{
    marginTop:hp("10%"), 
  
  }
});
