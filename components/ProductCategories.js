import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ProductCategories = (props) => {
  return (
    <TouchableOpacity onPress={props.press}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={props.imgSource}
          />
        </View>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Bold",
            }}
          >
            {props.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
    height: 350,
  },
  imgContainer: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  title: {
    paddingHorizontal: 15,
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});

export default ProductCategories;
