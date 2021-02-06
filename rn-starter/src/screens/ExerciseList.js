import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const ExerciseList = () => {
  const friends = [
    { name: "Agnes", age: "19" },
    { name: "Shalbrt", age: "22" },
    { name: "Vini", age: "20" },
    { name: "Mayara", age: "18" },
    { name: "Juninho", age: "21" },
    { name: "Matheus", age: "23" },
  ];

  const render = ({ item }) => (
    <Text style={styles.textStyle}>
      {item.name} - age {item.age}
    </Text>
  );

  return (
    <View>
      <Text style={styles.header}>Challenge</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={render}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: "900",
    alignSelf: "center",
  },
});

export default ExerciseList;
