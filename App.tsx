import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoRow from "./components/TodoRow";

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const submitTodo = () => {
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo List</Text>
      <View style={styles.todoContainer}>
        <View>
          <TextInput
            placeholder="Todo task name"
            onChangeText={setTodo}
            value={todo}
            style={styles.inputField}
          />
        </View>
        <View>
          <Pressable onPress={submitTodo}>
            <Text>Save</Text>
          </Pressable>
        </View>
        <View></View>
      </View>

      <ScrollView>
        <TodoRow text="someData" />
        {/* someData.map((item) => (
            <Row>
          )) */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
  },
  todoContainer: {
    flexDirection: "row",
    backgroundColor: "pink",
  },
  inputField: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  saveText: {
    alignItems: "center",
    justifyContent: "center",
  },
});
