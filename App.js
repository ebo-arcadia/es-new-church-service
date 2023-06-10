import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import ReadingListItem from "./components/ReadingListItem";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [readingList, setReadingList] = useState([]);

  function readingListHandler(enteredText) {
    setEnteredText(enteredText);
  }
  function addReadingListHandler() {
    setReadingList((currentReadingList) => [
      ...currentReadingList,
      { text: enteredText, id: uuid.v4().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your reading list"
          onChangeText={readingListHandler}
        />
        <Button title="Add a book" onPress={addReadingListHandler} />
      </View>
      <View style={styles.booksContainer}>
        <FlatList
          data={readingList}
          renderItem={(itemData) => {
            return <ReadingListItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      {/* <ScrollView style={styles.booksContainer}>
        {readingList.map((textItem) => (
          <View key={uuid.v4()} style={styles.listItem}>
            <Text style={styles.itemText}>{textItem}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingHorizontal: 10,
  },
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
  booksContainer: {
    backgroundColor: "red",
  },
  flexContainer: {
    flex: 1,
    padding: 20,
  },
});
