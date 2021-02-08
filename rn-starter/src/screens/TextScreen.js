import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={{ alignSelf: "center", paddingTop: 15 }}>Text screen</Text>
      <TextInput
        style={styles.input}
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <Text>My name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#3066be",
    borderWidth: 2,
    borderStyle: "solid",
    width: "80%",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
  },
});

export default TextScreen;
