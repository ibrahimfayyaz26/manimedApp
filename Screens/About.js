import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const About = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerB}>
          <Text style={styles.textB}>impartialenterprises: </Text>
          <Text style={styles.text}>
            Impartial enterprises is committed for creations, manufacturing and
            supplies of Prime quality Products in the fields of Garments and
            Sportswear. Beside that our companies is striving to keep a
            continuous grip over the quality and service standards, and have
            been taking every possible measures in this regard. Marketing
            strategy of our company is aggressive, and marketing departments
            utilize and adopt every possible way to introduce products to
            relevant foreign companies. In order to support these marketing
            departments in a positive manner, Our President plans their visit to
            various customers two times in a year; and gives a very successful
            outcome of marketing departments Efforts.
          </Text>
        </View>
        <View style={styles.madeContainer}>
          <Text style={styles.made}>Developed by:</Text>
          <View style={styles.madeContainerDir}>
            <Text style={styles.madeName}>Ibrahim Fayyaz</Text>
          </View>
          <Text style={styles.made}>Instagram id:</Text>
          <View style={styles.madeContainerDir}>
            <Text style={styles.madeName}>dev_m1000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 15,
    padding: 5,
  },
  textB: {
    fontFamily: "Bold",
    fontSize: 22,
  },
  text: {
    fontSize: 20,
  },
  madeContainer: {
    justifyContent: "flex-end",
    marginTop: 20,
    padding: 10,
  },
  made: {
    fontFamily: "Bold",
    fontSize: 20,
  },
  madeContainerDir: {
    margin: 10,
    marginLeft: 50,
  },
  madeName: {
    fontSize: 18,
  },
  containerB: {
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default About;
