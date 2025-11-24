import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

const TodoRow = ({ text }: Props) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.text}>{text}</Text>
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
});
