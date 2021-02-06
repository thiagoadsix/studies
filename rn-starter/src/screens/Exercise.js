import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Exercise = () => {
  const myName = "Thiago";

  return (
    <View>
      <Text style={styles.firstText}>Getting started with react native!</Text>
      <Text style={styles.secondText}>My name is {myName}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstText: {
    fontSize: 45,
  },
  secondText: {
    fontSize: 20,
  },
});

export default Exercise;
