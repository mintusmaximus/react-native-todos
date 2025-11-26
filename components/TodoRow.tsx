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
    width: "100%",
    padding: 12,
    backgroundColor: "#a1f7b8",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 2,
    justifyContent: "center",
    marginBottom: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
  strike: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
