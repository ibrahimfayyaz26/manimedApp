import { DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import Header from "../components/HeaderSuggestion";

const Categories = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Trending:</Text>
      </View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Header
              code={item.code}
              imageUri={item.imgUrl}
              title={item.title}
              press={() => props.navigation.navigate("Details")}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 8,
    marginLeft: 10,
  },
});

export default Categories;
