import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

const Details = (props) => {
  const name = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: name.itemImage }} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{name.itemName}</Text>
        <Text style={styles.headerText}>code:{name.itemCode}</Text>
      </View>
      <View style={styles.underText}>
        <Text style={styles.text}>
          {name.itemSize ? "size:  " + name.itemSize : ""}
        </Text>
        <Text style={styles.text}>
          {name.itemStuff ? "stuff:  " + name.itemStuff : ""}
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Home"
          color="aqua"
          onPress={() => props.navigation.popToTop()}
        />
        <Button title="ADD To Cart" color="aqua" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  imageContainer: {
    width: "100%",
    height: "55%",
  },
  image: { width: "100%", height: "100%" },
  headerContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Bold",
    fontSize: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: "Bold",
    marginBottom: 20,
  },
  underText: {
    margin: 30,
    padding: 10,
    alignItems: "center",
  },
  button: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Details;
