import { View, Text, StyleSheet, Pressable } from "react-native";
import COLORS from "../constants/Colors";

const GoalItem = ({ item, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#2e0663" }}
        onPress={() => onDelete(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: COLORS.accessory_3,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: COLORS.primary,
    padding: 8,
  },
});
