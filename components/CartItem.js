import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as Action from "../store/Action/CartAction";

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: props.imageUri }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 18, fontStyle: "italic" }}>{props.title}</Text>
        <Text style={styles.text}>{props.code}</Text>
        <MaterialIcons
          name="delete"
          size={25}
          color="red"
          onPress={() => {
            dispatch(Action.deletingdata(props.id));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginLeft: 32,
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowRadius: 20,
    elevation: 5,
    height: 150,
    width: 330,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
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

export default CartItem;
