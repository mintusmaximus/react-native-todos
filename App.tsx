import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TodoRow from "./components/TodoRow";
import TodoContainer from "./components/TodoContainer";

export default function App() {
  const submitTodo = () => {
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo List</Text>
      <TodoContainer submitTodo={submitTodo} />
      {/* asdf sidenote this is cringe */}
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
  saveText: {
    alignItems: "center",
    justifyContent: "center",
  },
});
