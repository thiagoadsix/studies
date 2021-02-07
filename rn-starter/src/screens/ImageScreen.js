import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";
import BeachImage from "../../assets/beach.jpg";
import ForestImage from "../../assets/forest.jpg";
import MountainImage from "../../assets/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Beach" image={BeachImage} score={9.5} />
      <ImageDetail title="Forest" image={ForestImage} score={7} />
      <ImageDetail title="Mountain" image={MountainImage} score={7} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
