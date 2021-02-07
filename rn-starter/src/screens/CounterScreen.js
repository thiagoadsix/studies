import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={style.currentCounterText}>Current counter: {counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Button title="Reset counter" onPress={() => setCounter(0)} />
    </View>
  );
};

const style = StyleSheet.create({
  currentCounterText: {
    paddingTop: 25,
    paddingBottom: 25,
    textAlign: "center",
  },
});

export default CounterScreen;
