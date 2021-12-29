import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"; 
export default StyleSheet.create({
    root: {flex: 1, padding: 0},
    title: {textAlign: 'center', fontSize: wp("7%")},
    codeFieldRoot: {marginTop: 0},
    cell: {
      width: wp("15%"),
      height: hp("7%"),
      lineHeight: 50,
      fontSize: wp("7%"),
      textAlign: 'center',
      color:"#347AF0",
      fontFamily: "TitilliumWeb-Regular",
      backgroundColor:"#fff",
      borderRadius:10
    },
    focusCell: {
      borderColor: '#347AF0',
      fontFamily: "TitilliumWeb-Regular",
    },
  });