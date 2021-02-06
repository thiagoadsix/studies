import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Component")}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("ExerciseList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default HomeScreen;
