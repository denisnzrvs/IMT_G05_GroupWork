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

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center",
    alignItems:'center',
    justifyContent:'center',
  },

  coverPhoto: {
    justifyContent: "center",
    alignItems: "stretch",
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: 20,
  },
  menu: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: 'gainsboro',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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

  recommendation: {marginLeft: 24,
  marginTop: 24,
  marginBottom: 12,
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "left",},
  title: {
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  buttonContainer: {alignSelf: 'stretch', justifyContent: 'center', height: '50%', width: '50%', backgroundColor: 'gainsboro', borderWidth: 10, borderColor: 'gainsboro', borderRadius: 15},
button:{height: '100%', width: "100%",    flex: 1,
     justifyContent: 'center',
     alignItems: 'center', backgroundColor: 'white', borderRadius: 17},
  row: {flexDirection: 'row', flex: 2, alignSelf:'stretch', alignItems:'center', justifyContent: 'space-between', flexWrap: 'wrap'},
  address: { marginLeft: 24, fontSize: 16, justifyContent: "center" },
  mapView: {
    height: "80%",
    width: undefined,
    flexGrow: 1,
    alignSelf: "flex-end",
    margin: 20,
    borderRadius: 10,
    ...Platform.select({
      default: {display: 'none'},
      ios: {display: 'flex'},
      android: {display: 'flex'},
    }),
  },
});
export default styles;
