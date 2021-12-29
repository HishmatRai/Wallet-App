import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Navigation from "./frontend/src/navigation";
function App(props:any) {
  let [fontsLoaded] = useFonts({
    "TitilliumWeb-Bold": require("./frontend/assets/fonts/TitilliumWeb-Bold.ttf"),
    "TitilliumWeb-ExtraLight": require("./frontend/assets/fonts/TitilliumWeb-ExtraLight.ttf"),
    "TitilliumWeb-Regular": require("./frontend/assets/fonts/TitilliumWeb-Regular.ttf"),
    "TitilliumWeb-Light": require("./frontend/assets/fonts/TitilliumWeb-Light.ttf"),
    "TitilliumWeb-SemiBold": require("./frontend/assets/fonts/TitilliumWeb-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }
}

export default App;
