import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import ReadingListItem from "./components/ReadingListItem";
import ReadingListInput from "./components/ReadingListInput";

export default function App() {
  const [readingList, setReadingList] = useState([]);

  function addReadingListHandler(enteredText) {
    setReadingList((currentReadingList) => [
      ...currentReadingList,
      { text: enteredText, id: uuid.v4().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <ReadingListInput onAddReadingItems={addReadingListHandler} />
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
