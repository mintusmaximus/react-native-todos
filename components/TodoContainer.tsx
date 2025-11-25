import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

type ContainerProps = {
  submitTodo: () => void;
};

const TodoContainer = ({ submitTodo }: ContainerProps) => {
  const [todo, setTodo] = useState<string>("");
  return (
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
    </View>
  );
};

export default TodoContainer;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    backgroundColor: "pink",
  },
  inputField: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
});
