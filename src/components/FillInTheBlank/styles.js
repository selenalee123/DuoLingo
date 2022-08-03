import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    flexShrink: 1,
    flexWrap: 'wrap'
    // width: 100,

  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "red",
    flexShrink: 1,
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
