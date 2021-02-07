import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({image, score, title}) => {
  console.log("opa");
  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>Image score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 50
  },
});

export default ImageDetail;
