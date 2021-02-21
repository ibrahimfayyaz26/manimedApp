import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../store/Action/Action";
import Header from "../components/Product";

const SubProducts = (props) => {
  const [load, setLoad] = useState(true);
  const name = props.route.params.itemName;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.fetchSub(name));
  }, [dispatch]);
  const data = useSelector((state) => state.SubCat.subCategory);

  if (load) {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        return (
          <Header
            code={item.code}
            imageUri={item.imageUri}
            title={item.name}
            press={() => {
              props.navigation.navigate("Details", {
                itemName: item.name,
                itemSub: item.subCategory,
                itemId: item.subId,
                itemImage: item.imageUri,
                itemCode: item.code,
                itemSize: item.size,
                itemStuff: item.stuff,
              });
              setLoad(true);
            }}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SubProducts;
