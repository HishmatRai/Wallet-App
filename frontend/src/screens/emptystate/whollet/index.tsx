import React,{useEffect} from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import Tabs from "../../../components/tabs";
import { Feather,Ionicons,EvilIcons } from "@expo/vector-icons";
import WholletScreenImg from "./../../../../assets/imagse/wholletScreenImg.svg";
import BgColorButton from "../../../components/button/bgcolorbutton";
function Whollet(props:any) {
  const [toashMessageShow, settoashMessageShow] =
  React.useState<boolean>(false);
useEffect(() => {
  setTimeout(() => {
    settoashMessageShow(true);
  }, 2000);
}, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#edf1f9"
        translucent={false}
      />
      <View style={styles._data_main}>
        <View>
          <View style={styles._header_main}>
            <Feather name="align-right" size={24} color="#edf1f9" />
            <Text style={styles._header_heading}>Whollet</Text>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={styles._drawer_icon}>
              <Feather name="align-right" size={24} color="#0D1F3C" />
            </TouchableOpacity>
          </View>
          <Text style={styles._title}>
          This is a place where you can find your deposited {'\n'}assets. Let's go through your first deposit!
          </Text>
        </View>
        <View style={styles._img_main}>
          <WholletScreenImg width={"80%"} height={"80%"} fill={"#edf1f9"} />
        </View>
        <BgColorButton
          bgColor="#347AF0"
          btnTextColor="#fff"
          btnTitle="Deposit Coins"
          // path={() => props.navigation.navigate("EnterPin")}
        />
      </View>
      <Tabs path={props.navigation}/>
      {toashMessageShow ? (
        <View style={styles._toash_message_main}>
          <View style={styles._toash_category_main}>
            <View style={styles._toash_category_icon}>
              <Ionicons name="checkmark-sharp" size={15} color="white" />
            </View>
            <Text style={styles._toash_message}>Successful profile verification</Text>
          </View>
          <TouchableOpacity style={styles._toash_close_btn} onPress={()=> settoashMessageShow(false)}>
            <EvilIcons name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
export default Whollet;
