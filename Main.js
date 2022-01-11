import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{ title: "Minsk" }}
        />
        <Stack.Screen name="Food"
        component={FlatListBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
function Main(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.imageStack}>
          <Image
            source={require("./assets/icons/minsk_photo.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.image3Stack}>
                <ImageBackground
                  source={require("./assets/icons/hotel_minsk.png")}
                  resizeMode="contain"
                  style={styles.image3}
                  imageStyle={styles.image3_imageStyle}
                >
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Hotel")}
                    style={styles.button1}
                  ></TouchableOpacity>
                </ImageBackground>
                <ImageBackground
                  source={require("./assets/icons/food_minsk.png")}
                  resizeMode="contain"
                  style={styles.image2}
                  imageStyle={styles.image2_imageStyle}
                >
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Food")}
                    style={styles.button}
                  ></TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.image4Row}>
                <ImageBackground
                  source={require("./assets/icons/museum_minsk.png")}
                  resizeMode="contain"
                  style={styles.image4}
                  imageStyle={styles.image4_imageStyle}
                >
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Museum")}
                    style={styles.button2}
                  ></TouchableOpacity>
                </ImageBackground>
                <ImageBackground
                  source={require("./assets/icons/shops_minsk.png")}
                  resizeMode="contain"
                  style={styles.image5}
                  imageStyle={styles.image5_imageStyle}
                >
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Shops")}
                    style={styles.button3}
                  ></TouchableOpacity>
                </ImageBackground>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 407,
    height: 831,
    marginTop: -19,
    marginLeft: -32
  },
  image: {
    top: 0,
    left: 0,
    width: 407,
    height: 284,
    position: "absolute"
  },
  scrollArea: {
    top: 262,
    left: 32,
    width: 375,
    height: 569,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  scrollArea_contentContainerStyle: {
    height: 569,
    width: 375
  },
  image3: {
    top: 0,
    left: 178,
    width: 188,
    height: 181,
    position: "absolute"
  },
  image3_imageStyle: {},
  button1: {
    width: 158,
    height: 181,
    backgroundColor: "rgba(230, 230, 230,0)",
    marginLeft: 16
  },
  image2: {
    top: 0,
    left: 0,
    width: 179,
    height: 186,
    position: "absolute"
  },
  image2_imageStyle: {},
  button: {
    width: 158,
    height: 181,
    backgroundColor: "rgba(230, 230, 230,0)",
    marginLeft: 11
  },
  image3Stack: {
    width: 366,
    height: 186,
    marginTop: 40,
    marginLeft: 9
  },
  image4: {
    width: 158,
    height: 186
  },
  image4_imageStyle: {},
  button2: {
    width: 158,
    height: 181,
    backgroundColor: "rgba(230, 230, 230,0)"
  },
  image5: {
    width: 166,
    height: 186,
    marginLeft: 20
  },
  image5_imageStyle: {},
  button3: {
    width: 158,
    height: 181,
    backgroundColor: "rgba(230, 230, 230,0)",
    marginLeft: 3
  },
  image4Row: {
    height: 186,
    flexDirection: "row",
    marginTop: 79,
    marginLeft: 20,
    marginRight: 11
  },
  imageStack: {
    width: 407,
    height: 831
  }

});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.item}>{item.name} </Text>
          </View>
        )}
      )}
    />
  </View>
);
};

export default Main;
