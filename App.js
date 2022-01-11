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
import MapView from "react-native-maps";
import styles from "./styles";
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

        <Stack.Screen name="A" component={A} options={{ title: "A" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/minsk_photo.png")}
        />
      </View>
      <View style={styles.menu}>
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
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/minsk_photo.png")}
        />
      </View>
      <View style={styles.menu}>
        <Button title="A" onPress={() => navigation.navigate("A")} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const Food = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
const Shops = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
const Hotel = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
const A = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/minsk_photo.png")}
        />
      </View>
      <View style={styles.description}>
        <View
          style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}
        >
          <Text style={styles.title}>Title name</Text>
          <Text style={styles.address}>Street A, City 17</Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default MyStack;
