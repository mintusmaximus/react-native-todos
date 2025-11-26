import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  id: number;
  done: boolean;
};

const TodoRow = ({ text, id, done }: Props) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={[styles.text, done ? styles.strike : null]}>{text}</Text>
    </View>
  );
};

export default TodoRow;

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: "red",
  },
  text: {
    color: "blue",
  },
  strike: {
    textDecorationLine: "line-through",
  },
});
