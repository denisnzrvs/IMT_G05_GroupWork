import { Platform, StatusBar, StyleSheet, Dimensions } from "react-native";
const dimensions = Dimensions.get("window");
const w = dimensions.width / 0.6;
const h = dimensions.height / 0.5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: undefined,
    width: undefined,
    flexDirection: "column",
    alignItems: "center",
    resizeMode: "stretch",
    backgroundColor: "grey",
  },

  cardCont: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "grey",
  },

  card: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "grey",
    marginTop: 20,
    marginBottom: 20,
    resizeMode: "stretch",
    borderWidth: 5,
    borderColor: "red",
    height: 489,
    width: 573,
  },

  minskPhoto: {
    justifyContent: "center",
    alignItems: "stretch",
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  mainMenu: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "ghostwhite",
    marginTop: 20,
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  boxText: { color: "darkslategray", fontWeight: "bold" },

  cat: {
    flex: 1,
    marginTop: 20,
    alignSelf: "center",
    resizeMode: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    //  ...Platform.select({ ios: { paddingTop: 20 }, android: { paddingTop: StatusBar.currentHeight } })
  },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  column: { flexDirection: "column", alignItems: "center" },
  paragraph: { margin: 24, fontSize: 18, textAlign: "center" },
  catPhoto: {
    height: undefined,
    width: undefined,
    resizeMode: "stretch",
  },
});
export default styles;
