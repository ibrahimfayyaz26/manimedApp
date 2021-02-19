import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderSuggestion = () => {
  return (
    <View style={styles.container}>
      <Text>HeaderSuggestion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    height: 200,
    width: "70%",
  },
});

export default HeaderSuggestion;
