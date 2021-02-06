import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const hello = <Text>Hello to you</Text>;

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello, I'm a component!</Text>
      <Text>Hi there!</Text>
      <Text>{(5 * 10) / 2}</Text>
      <Text>{hello}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "red",
  },
  text: {
    fontSize: 30,
    color: "blue",
    alignSelf: "center",
    fontWeight: "bold",
    opacity: 0.8,
  },
});

export default ComponentsScreen;
