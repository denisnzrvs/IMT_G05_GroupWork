import * as React from "react";
import { Text, View, Button } from "react-native";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Card from "./Card";
import Row from "./Row";
import Column from "./Column";
import styles from "./styles";
const Cardes = new Array(4).fill(null).map((v, i) => i + 1);
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardCont}>
        <Image
          style={styles.minskPhoto}
          source={require("./assets/minsk_photo.png")}
        />
      </View>
      <View style={styles.mainMenu}>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
