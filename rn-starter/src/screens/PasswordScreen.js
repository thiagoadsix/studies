import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Text style={styles.passwordRule}>
        {password.length <= 5
          ? "Password must be longer than 5 characters"
          : null}
      </Text>
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
  passwordRule: {
    color: "red",
  },
});

export default PasswordScreen;
