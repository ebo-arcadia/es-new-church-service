import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import ReadingListItem from "./components/ReadingListItem";
import ReadingListInput from "./components/ReadingListInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [readingList, setReadingList] = useState([]);
  const [modalVisible, setModelVisible] = useState(false);

  function addReadingListHandler(enteredText) {
    setReadingList((currentReadingList) => [
      ...currentReadingList,
      { text: enteredText, id: uuid.v4().toString() },
    ]);
    cancelAddListItemHandler();
  }

  function readyAddListItemHandler() {
    setModelVisible(true);
  }

  function cancelAddListItemHandler() {
    setModelVisible(false);
  }

  function deleteReadingItemHandler(id) {
    setReadingList((currentReadingList) => {
      return currentReadingList.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new reading item"
          color="purple"
          onPress={readyAddListItemHandler}
        />

        <ReadingListInput
          visible={modalVisible}
          onAddReadingItems={addReadingListHandler}
          onCancelModal={cancelAddListItemHandler}
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
              console.log(index);
              return item.id, index;
            }}
          />
        </View>
      </View>
    </>
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
