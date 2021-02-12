import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter new title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(e) => setTitle(e)}
      />
      <Text style={styles.label}>Enter new content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(e) => setContent(e)}
      />
      <Button title="Save blog post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default BlogPostForm;
