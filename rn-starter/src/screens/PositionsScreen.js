import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PositionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewRed} />
      <View style={styles.viewGreen} />
      <View style={styles.viewBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    height: 200,
    justifyContent: "space-between",
  },
  viewRed: {
    backgroundColor: "red",
    width: 55,
    height: 55,
  },
  viewGreen: {
    backgroundColor: "green",
    width: 55,
    height: 55,
    top: 55,
  },
  viewBlue: {
    backgroundColor: "blue",
    width: 55,
    height: 55,
  },
});

export default PositionsScreen;
