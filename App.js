import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your book list" />
          <Button title="Add a book" />
        </View>
        <View style={styles.booksContainer}>
          <Text>List of books...</Text>
        </View>
      </View>
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
