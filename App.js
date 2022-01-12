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

        <Stack.Screen
        name="theNationalArtMuseum"
        component={theNationalArtMuseum}
        options={{ title: "The National Art Museum" }}
        />

        <Stack.Screen
        name="yGallery"
        component={yGallery}
        options={{ title: "Y Gallery" }}
        />

        <Stack.Screen
        name="culturalCenterKorpus"
        component={culturalCenterKorpus}
        options={{ title: "Cultural Center Korpus" }}
        />

        <Stack.Screen
        name="artBelarusGallery"
        component={artBelarusGallery}
        options={{ title: "Art Belarus Gallery" }}
        />

        <Stack.Screen
        name="theAzgurMuseumAndStudio"
        component={theAzgurMuseumAndStudio}
        options={{ title: "The Azgur Museum and Studio" }}
        />

        <Stack.Screen
        name="Miraž"
        component={Miraž}
        options={{ title: "Miraž" }}
        />

        <Stack.Screen
        name="Pesochnica"
        component={Pesochnica}
        options={{ title: "Pesochnica" }}
        />

        <Stack.Screen
        name="DEPO"
        component={DEPO}
        options={{ title: "DEPO" }}
        />

        <Stack.Screen
        name="Lido"
        component={Lido}
        options={{ title: "Lido" }}
        />

        <Stack.Screen
        name="Enzo"
        component={Enzo}
        options={{ title: "Enzo" }}
        />
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
          source={require("./assets/icons/museum_minsk.png")}
        />
      </View>
      <View style={styles.menu}>
        <Button title="The National Art Museum" onPress={() => navigation.navigate("theNationalArtMuseum")} />
        <Button title="Y Gallery" onPress={() => navigation.navigate("yGallery")} />
        <Button title="Cultural Center Korpus" onPress={() => navigation.navigate("culturalCenterKorpus")} />
        <Button title="Art Belarus Gallery" onPress={() => navigation.navigate("artBelarusGallery")} />
        <Button title="The Azgur Museum and Studio" onPress={() => navigation.navigate("theAzgurMuseumAndStudio")} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Food = ({ navigation }) => {
  return <SafeAreaView style={styles.container}>
  <View style={styles.coverPhotoContainer}>
    <Image
      style={styles.coverPhoto}
      source={require("./assets/icons/food_minsk.png")}
    />
  </View>
  <View style={styles.menu}>
    <Button title="Miraž" onPress={() => navigation.navigate("Miraž")} />
    <Button title="Pesochnica" onPress={() => navigation.navigate("Pesochnica")} />
    <Button title="DEPO" onPress={() => navigation.navigate("DEPO")} />
    <Button title="Lido" onPress={() => navigation.navigate("Lido")} />
    <Button title="Enzo" onPress={() => navigation.navigate("Enzo")} />
  </View>
  <StatusBar style="auto" />
  </SafeAreaView>;
};
const Shops = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
const Hotel = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const theNationalArtMuseum = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/museums/theNationalArtMuseum.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> The National Art Museum </Text>
          <Text style={styles.address}> Street Lenina, 20 </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const yGallery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/museums/yGallery.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Y Gallery </Text>
          <Text style={styles.address}> Street Kastrycnickaja, 19 </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const culturalCenterKorpus = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/museums/culturalCenterKorpus.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Cultural Center Korpus </Text>
          <Text style={styles.address}> Street Praspiekt Mašerava, 9 </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const artBelarusGallery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/museums/artBelarusGallery.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Art Belarus Gallery </Text>
          <Text style={styles.address}> Street Kazlova, 3 </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const theAzgurMuseumAndStudio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/museums/theAzgurMuseumAndStudio.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> The Azgur Museum and Studio </Text>
          <Text style={styles.address}> Street Zaira Azhura, 8 </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Miraž = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/Miraž.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Miraž </Text>
          <Text style={styles.address}> Street Kulman, 5b </Text>
          <Text style={styles.address}> You must try: kebab </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Pesochnica = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/Pesochnica.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Pesochnica </Text>
          <Text style={styles.address}> Street Kujbyšava, 45 </Text>
          <Text style={styles.address}> You must try: all from waffles to burgers </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const DEPO = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/DEPO.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> DEPO </Text>
          <Text style={styles.address}> Street Kastryčnickaja, 23 </Text>
          <Text style={styles.address}> You must try: crepes </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Lido = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/Lido.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Lido </Text>
          <Text style={styles.address}> Street Niezaležnasci, 49/1 </Text>
          <Text style={styles.address}> You must try: home-made dishes </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Enzo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/Enzo.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Enzo </Text>
          <Text style={styles.address}> Street Kastryčnickaja, 23 </Text>
          <Text style={styles.address}> You must try: Enzo Burger, Texas Burger, steaks </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89855370029596,
            longitude: 27.560827506866936,
          }}>
      </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
export default MyStack;
