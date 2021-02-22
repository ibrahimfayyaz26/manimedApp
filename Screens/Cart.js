import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../store/Action/CartAction";
import CartItem from "../components/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getingdata());
  }, [dispatch]);
  const data = useSelector((state) => state.Cart.cart);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(itemData) => {
          return (
            <CartItem
              code={itemData.item.code}
              imageUri={itemData.item.imageUri}
              title={itemData.item.name}
              id={itemData.item.id}
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
});

export default Cart;
