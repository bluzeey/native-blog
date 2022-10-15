import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EditScreen = ({ navigation, route }) => {
  const itemId = route.params.id;
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === itemId);
  const [title,setTitle]=useState(blogPost.title)
  const [content,setContent]=useState(blogPost.content)
  return (
    <View> 
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={blogPost.title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={blogPost.content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={async () => {
          await addBlogPost(title, content);
          navigation.navigate("Blogs");
        }}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
