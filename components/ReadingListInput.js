import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your reading list"
          onChangeText={readingListHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add a book" onPress={addReadingListHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ReadingListInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    marginBottom: 22,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "green",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginTop: 14,
    width: "30%",
    marginHorizontal: 8,
  },
});
