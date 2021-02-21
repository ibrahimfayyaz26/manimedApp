import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import Product from "../components/ProductCategories";
import { useDispatch } from "react-redux";
import * as Action from "../store/Action/Action";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.fetchItem());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Product
          press={() => {
            props.navigation.navigate("Categories", {
              itemName: "MEDICINE",
              ItemId: "medicine",
            });
          }}
          imgSource={require("../assets/pexels-karolina-grabowska-4210607.jpg")}
          text={"MEDICINE"}
        />
        <Product
          press={() => {
            props.navigation.navigate("Categories", {
              itemName: "SPORTS WEARS & SPORTS UNIFORM",
              ItemId: "sportWear",
            });
          }}
          imgSource={require("../assets/work1.jpg")}
          text={"SPORTS WEARS & SPORTS UNIFORM"}
        />
        <Product
          press={() =>
            props.navigation.navigate("Categories", {
              itemName: "MARTIAL ARTS",
              ItemId: "martial",
            })
          }
          imgSource={require("../assets/work2.jpg")}
          text={"MARTIAL ARTS"}
        />
        <Product
          press={() => {
            props.navigation.navigate("Categories", {
              itemName: "OTHER PRODUCTS",
              ItemId: "other",
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
