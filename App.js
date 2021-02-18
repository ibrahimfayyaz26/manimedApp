import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import appStore from "./store/Store";
import Navigation from "./AppNavigation/Navigation";

const fonts = async () => {
  await Font.loadAsync({
    Bold: require("./assets/Gugi-Regular.ttf"),
  });
};

export default function App() {
  const [load, setLoad] = useState(true);

  if (load) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setLoad(false)}
        onError={() => setLoad(false)}
      />
    );
  }

  return (
    <Provider store={appStore}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
