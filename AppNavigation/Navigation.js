import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../Screens/Home";
import Categories from "../Screens/Categories";
import SubCategories from "../Screens/SubCategories";
import Details from "../Screens/Details";
import Cart from "../Screens/Cart";
import About from "../Screens/About";
import CustomerService from "../Screens/CustomerServices";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import Contact from "../Screens/Contact";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginLeft: 10 }}>
      <MaterialIcons
        name="menu"
        size={24}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

const HomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Product Categories",
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
      <stack.Screen
        name="Categories"
        component={Categories}
        options={(props) => ({
          headerTitleAlign: "center",
          headerTitle: props.route.params.itemName,
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        })}
      />
      <stack.Screen
        name="SubCategories"
        component={SubCategories}
        options={(props) => ({
          headerTitleAlign: "center",
          headerTitle: props.route.params.itemName,
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        })}
      />
      <stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
    </stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
      <stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
    </stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="About"
        component={About}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
    </stack.Navigator>
  );
};

const CustomerServiceStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="CustomerService"
        component={CustomerService}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
    </stack.Navigator>
  );
};

const PrivacyPolicyStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Privacy Policy",
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
    </stack.Navigator>
  );
};

const ContactStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => {
            return <HeaderLeft />;
          },
          headerStyle: {
            backgroundColor: "#ccf2f4",
          },
        }}
      />
    </stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <tab.Navigator
      screenOptions={(props) => ({
        tabBarIcon: () => {
          let iconName;

          if (props.route.name == "Products") {
            iconName = "home";
          } else if (props.route.name == "Cart") {
            iconName = "cart";
          }
          return <Ionicons name={iconName} size={30} color="black" />;
        },
      })}
    >
      <tab.Screen name="Products" component={HomeStack} />
      <tab.Screen name="Cart" component={CartStack} />
    </tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <drawer.Navigator>
        <drawer.Screen name="Home" component={MainTab} />
        <drawer.Screen name="About" component={AboutStack} />
        <drawer.Screen
          name="Customer Service"
          component={CustomerServiceStack}
        />
        <drawer.Screen name="Privacy Policy" component={PrivacyPolicyStack} />
      </drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
