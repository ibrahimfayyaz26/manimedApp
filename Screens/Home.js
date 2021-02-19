import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Product from "../components/ProductCategories";

const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Product
          press={() => {
            props.navigation.navigate("Categories", {
              itemName: "SPORTS WEARS & SPORTS UNIFORM",
            });
          }}
          imgSource={require("../assets/work1.jpg")}
          text={"SPORTS WEARS & SPORTS UNIFORM"}
        />
        <Product
          press={() =>
            props.navigation.navigate("Categories", {
              itemName: "MARTIAL ARTS",
            })
          }
          imgSource={require("../assets/work2.jpg")}
          text={"MARTIAL ARTS"}
        />
        <Product
          press={() => {
            props.navigation.navigate("Categories", {
              itemName: "OTHER PRODUCTS",
            });
          }}
          imgSource={require("../assets/work3.jpg")}
          text={"OTHER PRODUCTS"}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
