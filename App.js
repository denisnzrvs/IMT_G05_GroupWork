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

        <Stack.Screen
        name="pinkyBandinsky"
        component={pinkyBandinsky}
        options={{ title: "Pinky Bandinsky" }}
        />

        <Stack.Screen
        name="Vasilki"
        component={Vasilki}
        options={{ title: "Vasilki" }}
        />

        <Stack.Screen
        name="penaDnej"
        component={penaDnej}
        options={{ title: "Pena Dnej" }}
        />

        <Stack.Screen
        name="GUM"
        component={GUM}
        options={{ title: "GUM" }}
        />

        <Stack.Screen
        name="TSUM"
        component={TSUM}
        options={{ title: "TSUM Minsk" }}
        />

        <Stack.Screen
        name="KamaroŭskyMarket"
        component={KamaroŭskyMarket}
        options={{ title: "Kamaroŭsky Market" }}
        />

        <Stack.Screen
        name="DanaMall"
        component={DanaMall}
        options={{ title: "Dana Mall" }}
        />

        <Stack.Screen
        name="VialikіDziakuj"
        component={VialikіDziakuj}
        options={{ title: "Vialikі Dziakuj" }}
        />

        <Stack.Screen
        name="TrinityAndRiverside"
        component={TrinityAndRiverside}
        options={{ title: "Trinity&Riverside" }}
        />

        <Stack.Screen
        name="Flatcom"
        component={Flatcom}
        options={{ title: "Flatcom" }}
        />

        <Stack.Screen
        name="HotelMonastyrski"
        component={HotelMonastyrski}
        options={{ title: "Hotel Monastyrski" }}
        />

        <Stack.Screen
        name="RenaissanceMinskHotel"
        component={RenaissanceMinskHotel}
        options={{ title: "Renaissance Minsk Hotel" }}
        />

        <Stack.Screen
        name="Mariott"
        component={Mariott}
        options={{ title: "Mariott" }}
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
      <View style={styles.row}>
      <View style = {styles.buttonContainer}>
<TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Food")}>
<Text style={styles.buttonText}>Food</Text>
</TouchableOpacity>
      </View>
      <View style = {styles.buttonContainer}>
      <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Shops")}>
      <Text style={styles.buttonText}>Shops</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.buttonContainer}>
      <TouchableOpacity style = {styles.button}onPress={() => navigation.navigate("Museum")}>
      <Text style={styles.buttonText}>Museum</Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.buttonContainer}>
      <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Hotel")}>
      <Text style={styles.buttonText}>Hotel</Text>
      </TouchableOpacity>
      </View>
      </View>
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
    <Button title="Pinky Bandinsky" onPress={() => navigation.navigate("pinkyBandinsky")} />
    <Button title="Vasilki" onPress={() => navigation.navigate("Vasilki")} />
    <Button title="Pena Dnej" onPress={() => navigation.navigate("penaDnej")} />
  </View>
  <StatusBar style="auto" />
  </SafeAreaView>;
};

const Shops = ({ navigation }) => {
  return <SafeAreaView style={styles.container}>
  <View style={styles.coverPhotoContainer}>
    <Image
      style={styles.coverPhoto}
      source={require("./assets/icons/shops_minsk.png")}
    />
  </View>
  <View style={styles.menu}>
    <Button title="GUM" onPress={() => navigation.navigate("GUM")} />
    <Button title="TSUM Minsk" onPress={() => navigation.navigate("TSUM")} />
    <Button title="Kamaroŭsky Market" onPress={() => navigation.navigate("KamaroŭskyMarket")} />
    <Button title="Dana Mall" onPress={() => navigation.navigate("DanaMall")} />
    <Button title="Vialikі Dziakuj" onPress={() => navigation.navigate("VialikіDziakuj")} />
  </View>
  <StatusBar style="auto" />
  </SafeAreaView>;
};

const Hotel = ({ navigation }) => {
  return <SafeAreaView style={styles.container}>
  <View style={styles.coverPhotoContainer}>
    <Image
      style={styles.coverPhoto}
      source={require("./assets/icons/shops_minsk.png")}
    />
  </View>
  <View style={styles.menu}>
    <Button title="Trinity&Riverside" onPress={() => navigation.navigate("TrinityAndRiverside")} />
    <Button title="Flatcom" onPress={() => navigation.navigate("Flatcom")} />
    <Button title="Hotel Monastyrski" onPress={() => navigation.navigate("HotelMonastyrski")} />
    <Button title="Renaissance Minsk Hotel" onPress={() => navigation.navigate("RenaissanceMinskHotel")} />
    <Button title="Mariott" onPress={() => navigation.navigate("Mariott")} />
  </View>
  <StatusBar style="auto" />
  </SafeAreaView>;
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
           latitude: 53.89847340873672,
           longitude: 27.56077135776869,
           latitudeDelta: 0.001,
           longitudeDelta: 0.001,
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
           latitude: 53.891480491039665,
           longitude: 27.57189156355414,
           latitudeDelta: 0.001,
           longitudeDelta: 0.001,
         }} >
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
            latitude: 53.915252341346914,
            longitude: 27.572769759398525,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
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
              latitude: 53.91015326504539,
              longitude: 27.579637242174673,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
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
             latitude: 53.899339879560074,
             longitude: 27.5785161857004,
             latitudeDelta: 0.001,
             longitudeDelta: 0.001,
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
        <View
          style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}
        >
          <Text style={styles.title}> Miraž </Text>
          <Text style={styles.address}> Street Kulman, 5b </Text>
          <Text style={styles.recommendation}>
            You must try: kebab
          </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.921243776288826,
            longitude: 27.57993359997196,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
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
          <Text style={styles.recommendation}> You must try: all from waffles to burgers </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{

            latitude: 53.91491766969068,
            longitude: 27.57013491943066,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
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
          <Text style={styles.recommendation}> You must try: crepes </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{

            latitude: 57.54099013542766,
            longitude: 25.39951055230902,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
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
          <Text style={styles.recommendation}> You must try: home-made dishes </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{

            latitude: 53.917046159803874,
            longitude: 27.58536194579001,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
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
          <Text style={styles.recommendation}> You must try: Enzo Burger, Texas Burger, steaks </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89016122410179,
            longitude: 27.574418332783168,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const pinkyBandinsky = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/pinkyBandinsky.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Pinky Bandinsky </Text>
          <Text style={styles.address}> Street Kamsamolskaja, 13a </Text>
          <Text style={styles.recommendation}> You must try: dinner </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.90286820117456,
            longitude: 27.552860869317133,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Vasilki = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/Vasilki.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Vasilki </Text>
          <Text style={styles.address}> Street praspiekt Niezaležnasci, 16 </Text>
          <Text style={styles.recommendation}> You must try: draniki, kolduny, pancakes, shank, “Olivier” salad </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.89858879619436,
            longitude: 27.55552445549251,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const penaDnej = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/food/penaDnej.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Pena Dnej </Text>
          <Text style={styles.address}> Street Internacyjanalnaja, 23 </Text>
          <Text style={styles.recommendation}> You must try: wine, tartare </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.90389092979887,
            longitude: 27.558796415010942,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const GUM = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/shops/GUM.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> GUM </Text>
          <Text style={styles.address}> Street praspiekt Niezaležnasci, 21 </Text>
          <Text style={styles.recommendation}> You can buy: everything </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.900618171718435,
            longitude: 27.558063923074645,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const TSUM = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/shops/TSUM.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> TSUM </Text>
          <Text style={styles.address}> Street praspiekt Niezaležnasci, 54 </Text>
          <Text style={styles.recommendation}> You can buy: everything </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.91673277554038,
            longitude: 27.586101691718632,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const KamaroŭskyMarket = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/shops/kamaroŭskyMarket.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Kamaroŭsky Market </Text>
          <Text style={styles.address}> Street Viery Charužaj, 8 </Text>
          <Text style={styles.recommendation}> You can buy: fresh food </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.91992097425407,
            longitude: 27.577704943846914,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const DanaMall = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/shops/danaMall.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Dana Mall </Text>
          <Text style={styles.address}> Street Piatra Mscisłaŭca, 11 </Text>
          <Text style={styles.recommendation}> You can buy: mass-market </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.93294048362484,
            longitude: 27.649661609142747,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const VialikіDziakuj = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/shops/vialikіDziakuj.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Vialikі dziakuj </Text>
          <Text style={styles.address}> Street Kastryčnickaja, 23a </Text>
          <Text style={styles.recommendation}> You can buy: gifts and souvenirs </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.890263,
            longitude: 27.575320,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const TrinityAndRiverside = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/hotels/Trinity&Riverside.jpeg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Trinity&Riverside </Text>
          <Text style={styles.address}> Street Staravilenskaja, 12 </Text>
          <Text style={styles.recommendation}> Prices start from 8€ </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.908804,
            longitude: 27.556231,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Flatcom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/hotels/Flatcom.jpeg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Flatcom </Text>
          <Text style={styles.address}> Street Prytyckaha, 2 </Text>
          <Text style={styles.recommendation}> Prices start from 7€ </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.91128769073855,
            longitude: 27.506306008907355,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const HotelMonastyrski = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/hotels/HotelMonastyrski.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Hotel Monastyrski </Text>
          <Text style={styles.address}> Street Kiryly i Miafodzija, 6 </Text>
          <Text style={styles.recommendation}> Prices start from 45€ </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.90521671471928,
            longitude: 27.557907877070754,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const RenaissanceMinskHotel = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/hotels/RenaissanceMinskHotel.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Renaissance Minsk Hotel </Text>
          <Text style={styles.address}> Street praspiekt Dziarzynskaha, 1 </Text>
          <Text style={styles.recommendation}> Prices start from 80€ </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.892285631453696,
            longitude: 27.52910171316293,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Mariott = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image
          style={styles.coverPhoto}
          source={require("./assets/hotels/Mariott.jpg")}
        />
      </View>
      <View style={styles.description}>
        <View style={{ flex: 1, alignSelf: "flex-start", flexDirection: "column" }}>
          <Text style={styles.title}> Mariott </Text>
          <Text style={styles.address}> Street praspiekt Pieramozcau, 20 </Text>
          <Text style={styles.recommendation}> Prices start from 122€ </Text>
        </View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 53.93303305737984,
            longitude: 27.511693087462994,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
        </MapView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
export default MyStack;
