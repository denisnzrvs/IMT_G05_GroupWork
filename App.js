import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Card from "./Card";
import Row from "./Row";
import Column from "./Column";
import styles from "./styles";
const Cards = new Array(4).fill(null).map((v, i) => i + 1);
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Styles from "./styles";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Minsk Tour Guide" }}
        />
        <Stack.Screen
          name="Museum"
          component={Museum}
          options={{ title: "Museum" }}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{ title: "Food" }}
        />

        <Stack.Screen
          name="Shops"
          component={Shops}
          options={{ title: "Shops" }}
        />

        <Stack.Screen
          name="Hotel"
          component={Hotel}
          options={{ title: "Hotel" }}
        />

        <Stack.Screen
          name="A"
          component={A}
          options={{ title: "A" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardCont}>
        <Image
          style={styles.minskPhoto}
          source={require("./assets/minsk_photo.png")}
        />
      </View>
      <View style={styles.mainMenu}>
        <Button title="Food" onPress={() => navigation.navigate("Food")} />
        <Button title="Shops" onPress={() => navigation.navigate("Shops")} />
        <Button title="Museum" onPress={() => navigation.navigate("Museum")} />
        <Button title="Hotel" onPress={() => navigation.navigate("Hotel")} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Museum = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardCont}>
        <Image
          style={styles.minskPhoto}
          source={require("./assets/minsk_photo.png")}
        />
      </View>
      <View style={styles.mainMenu}>
        <Button title="A" onPress={() => navigation.navigate("A")} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const Food = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const Shops = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const Hotel = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const A = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Privet
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyStack;
