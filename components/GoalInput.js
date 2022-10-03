import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imager}
          source={require("../assets/image/goal.png")}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Cancel"
              onPress={props.endAddGoalHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: "#311b6b",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    color: "#120438",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonStyle: {
    width: 100,
    marginHorizontal: 5,
    marginTop: 10,
  },
});
