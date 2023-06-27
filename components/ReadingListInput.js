import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/main-logo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your reading list"
          onChangeText={readingListHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add a book"
              onPress={addReadingListHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancelModal}
              color="#f31282"
            />
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
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 10,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginTop: 14,
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 60,
    margin: 10,
  },
});
