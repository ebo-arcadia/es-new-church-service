import { StyleSheet, View, Text } from "react-native";

function ReadingListItem(props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
  );
}

export default ReadingListItem;

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 10,
    padding: 6,
    backgroundColor: "purple",
  },
  itemText: {
    color: "white",
  },
});
