import { StyleSheet, View, Text, Pressable } from "react-native";

function ReadingListItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteReadingItems.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
      android_ripple={{ color: "blue" }}
    >
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </Pressable>
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
  pressedItem: {
    opacity: 0.1,
  },
});
