import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const SubProducts = (props) => {
  const name = props.route.params.itemName;

  console.log(name);

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SubProducts;
