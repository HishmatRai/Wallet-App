import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import AppIntroSlider from "react-native-app-intro-slider";
import Slider1 from "./../../../assets/imagse/Slider1.svg";
import Slider2 from "./../../../assets/imagse/Slider2.svg";
import Slider4 from "./../../../assets/imagse/Slider4.svg";
import {IntroSliderThree} from './../../components/svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
function Intro(props:any) {
  const slides = [
    {
      key: "s1",
      text: `Manage all your crypto assets! It’s simple${"\n"}and easy! `,
      title: `Welcome to ${"\n"}Whollet`,
      titleStyle: styles.title,
      textStyle: styles.text,
      image: <Slider1 width={"100%"} height={"100%"} fill={"#BCD1F3"} />,
    },
    {
      key: "s2",
      title: `Nice and Tidy Crypto${"\n"}Portfolio!`,
      titleStyle: styles.title,
      text: `Keep BTC, ETH, XRP, and many other${"\n"}ERC-20 based tokens.`,
      image: <Slider2 width={"100%"} height={"100%"} fill={"#BCD1F3"} />,
    },
    {
      key: "s3",
      title: `Receive and Send${"\n"}Money to Friends!`,
      titleStyle: styles.title,
      text: `Send crypto to your friends with a personal${"\n"}message attached. `,
      image:<IntroSliderThree />,
      backgroundColor: "#22bcb5",
    },

    {
      key: "s4",
      title: ` Your Safety is Our${"\n"}Top Priority`,
      titleStyle: styles.title,
      text: `Our top-notch security features will keep${"\n"}you completely safe.`,
      image: <Slider4 width={"100%"} height={"100%"} fill={"#000"} />,
      backgroundColor: "#febe29",
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Welcome")}>
          <Text style={styles._skip_btn_text}>Skip</Text>
        </TouchableOpacity>
        <View style={styles._header_image}>{item.image}</View>
        <View style={styles._data_main}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={styles.nextBtn}>
        <Text style={styles._next_btn_text}>Next Step</Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={() => props.navigation.navigate("Welcome")}>
        <Text style={styles.textDone}>Let's Get Started</Text>
      </TouchableOpacity>
    );
  };
  const _onDone = () => {
    // this.setState({ isNavigation: true });
  };
  const onslideCahnge = (index, lastIndex) => {
    console.log(index, lastIndex);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#edf1f9"
        translucent={false}
      />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        dotStyle={{ backgroundColor: "#F2F2F2", marginTop: hp("-94%") }}
        activeDotStyle={{ backgroundColor: "#347AF0", marginTop: hp("-94%") }}
        onSlideChange={(index, lastIndex) => onslideCahnge(index, lastIndex)}
      />
    </View>
  );
}

export default Intro;
