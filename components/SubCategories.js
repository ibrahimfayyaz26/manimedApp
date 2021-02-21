import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

const SubCategories = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.press}>
      <View style={styles.container}>
        <Text style={styles.txt}>{props.subCategories}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowRadius: 20,
    elevation: 5,
    height: 70,
    width: "90%",
    justifyContent: "center",
  },
  txt: {
    fontFamily: "Bold",
    fontSize: 22,
    margin: 10,
    textAlign: "center",
  },
});

export default SubCategories;
