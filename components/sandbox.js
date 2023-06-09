import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row", // default is column
    justifyContent: "space-around", // main axis
    alignItems: "center", // cross axis
    paddingTop: 40,
    backgroundColor: "#333",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "coral",
    padding: 10,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "gold",
    padding: 10,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 10,
  },
});

export default Sandbox;
