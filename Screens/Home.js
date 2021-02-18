import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Home = (props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Categories", {
            itemName: "SPORTS WEARS & SPORTS UNIFORM",
          });
        }}
      >
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/work1.jpg")}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Bold",
              }}
            >
              SPORTS WEARS & SPORTS UNIFORM
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Categories", {
            itemName: "MARTIAL ARTS",
          })
        }
      >
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/work2.jpg")}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Bold",
              }}
            >
              MARTIAL ARTS
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Categories", {
            itemName: "OTHER PRODUCTS",
          });
        }}
      >
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/work3.jpg")}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Bold",
              }}
            >
              OTHER PRODUCTS
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
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

export default Home;
