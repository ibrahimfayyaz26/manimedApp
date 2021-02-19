import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const HeaderSuggestion = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.press}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: props.imageUri }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 18, fontStyle: "italic" }}>
            {props.title}
          </Text>
          <Text style={styles.text}>{props.code}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    marginLeft: 32,
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowRadius: 20,
    elevation: 5,
    height: 200,
    width: 330,
    flexDirection: "row",
  },
  imgContainer: {
    width: "65%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    height: "100%",
  },
  text: {
    fontFamily: "Bold",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default HeaderSuggestion;
