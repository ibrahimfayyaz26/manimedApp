import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Header from "../components/HeaderSuggestion";
import { useSelector, useDispatch } from "react-redux";
import Cat from "../components/SubCategories";

const Categories = (props) => {
  const name = props.route.params.ItemId;
  const data = useSelector((state) => state.Categories[name]);
  const unique = [
    ...data
      .reduce((map, obj) => map.set(obj.subCategory, obj), new Map())
      .values(),
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Trending:</Text>
        </View>
        <FlatList
          data={unique}
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Header
                code={item.code}
                imageUri={item.imageUri}
                title={item.name}
                press={() =>
                  props.navigation.navigate("Details", {
                    itemName: item.name,
                    itemSub: item.subCategory,
                    itemId: item.subId,
                    itemImage: item.imageUri,
                    itemCode: item.code,
                    itemSize: item.size,
                    itemStuff: item.stuff,
                  })
                }
              />
            );
          }}
        />
        <FlatList
          style={styles.flat}
          data={unique}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <Cat
                press={() => {
                  props.navigation.navigate("SubProducts", {
                    itemName: item.subCategory,
                  });
                }}
                subCategories={item.subCategory}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
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
  flat: {},
});

export default Categories;
