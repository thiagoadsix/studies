import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResults = async (id) => {
    const { data } = await yelp.get(`/${id}`);
    setResult(data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Image
        source={{ uri: result.image_url }}
        style={{ width: 120, height: 100 }}
      />
      <Text>{result.phone}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
