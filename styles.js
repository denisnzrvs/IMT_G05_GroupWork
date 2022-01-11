import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: undefined,
    width: undefined,
    flexDirection: "column",
    alignItems: "center",
    resizeMode: "stretch",
    backgroundColor: "gainsboro",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },

  coverPhotoContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "stretch",
  },

  coverPhoto: {
    justifyContent: "center",
    alignItems: "stretch",
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: "4%",
    borderBottomRightRadius: "4%",
    marginBottom: 20,
  },
  menu: {
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
  description: {
    flex: 2,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "ghostwhite",
    marginTop: 20,
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  paragraph: { margin: 24, fontSize: 18, textAlign: "center" },
  title: {
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  address: { marginLeft: 24, fontSize: 16, justifyContent: "center" },
  mapView: {
    height: "80%",
    width: undefined,
    flexGrow: 1,
    alignSelf: "flex-end",
    margin: 20,
    borderRadius: 10,
  },
});
export default styles;
