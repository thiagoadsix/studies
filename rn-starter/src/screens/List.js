import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const List = () => {
  const Item = ({ name }) => <Text>{name}</Text>;

  const peoples = [
    { name: "Thiago", key: "1" },
    { name: "Kamilla", key: "2" },
    { name: "Joeci", key: "3" },
    { name: "Raphaella", key: "4" },
  ];

  const render = ({ item }) => (
    <Text style={styles.textStyle}>{item.name}</Text>
  );

  return (
    <View>
      <Text style={styles.header}>Peoples</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={peoples}
        renderItem={render}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  header: {
    fontSize: 25,
    fontWeight: "900",
    alignSelf: "center",
  },
});

export default List;
