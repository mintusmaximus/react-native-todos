import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type ContainerProps = {
  submitTodo: () => void;
  setTodo: Dispatch<SetStateAction<string>>;
  todo: string;
};

const TodoContainer = ({ submitTodo, setTodo, todo }: ContainerProps) => {
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
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  inputField: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
