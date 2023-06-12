import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function ReadingListInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function readingListHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addReadingListHandler() {
    props.onAddReadingItems(enteredText);
    setEnteredText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your reading list"
        onChangeText={readingListHandler}
        value={enteredText}
      />
      <Button title="Add a book" onPress={addReadingListHandler} />
    </View>
  );
}

export default ReadingListInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "green",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
