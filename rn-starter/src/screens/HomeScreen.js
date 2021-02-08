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
      <Button
        title="Go To Image Screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go To Counter Screen"
        onPress={() => navigation.navigate("CounterScreen")}
      />
      <Button
        title="Go To Color Screen"
        onPress={() => navigation.navigate("ColorScreen")}
      />
      <Button
        title="Go To Square Screen"
        onPress={() => navigation.navigate("SquareScreen")}
      />
      <Button
        title="Go To Text Screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="Go To Password Screen"
        onPress={() => navigation.navigate("PasswordScreen")}
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
