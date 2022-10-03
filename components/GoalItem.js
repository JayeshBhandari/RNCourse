import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalListStyle}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.textStyle}>{props.value}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalListStyle: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textStyle: {
    padding: 8,
    color: "white",
  },
});
