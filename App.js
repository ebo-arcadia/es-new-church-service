import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import ReadingListItem from "./components/ReadingListItem";
import ReadingListInput from "./components/ReadingListInput";

export default function App() {
  const [readingList, setReadingList] = useState([]);
  const [modalVisible, setModelVisible] = useState(false);

  function addReadingListHandler(enteredText) {
    setReadingList((currentReadingList) => [
      ...currentReadingList,
      { text: enteredText, id: uuid.v4().toString() },
    ]);
  }

  function readyAddListItemHandler() {
    setModelVisible(true);
  }

  function deleteReadingItemHandler(id) {
    setReadingList((currentReadingList) => {
      return currentReadingList.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new reading item"
        color="purple"
        onPress={readyAddListItemHandler}
      />

      <ReadingListInput
        visible={modalVisible}
        onAddReadingItems={addReadingListHandler}
      />

      <View style={styles.booksContainer}>
        <FlatList
          data={readingList}
          renderItem={(itemData) => {
            return (
              <ReadingListItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteReadingItems={deleteReadingItemHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingHorizontal: 10,
  },
  booksContainer: {
    backgroundColor: "red",
  },
});
