import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function ToDoForm({ addTask }) {
  const [task, setTask] = useState(""); // Local state for input field

  const handleAddTask = () => {
    addTask(task); // Call the passed-down function
    setTask(""); // Clear the input field after adding the task
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={task} // Controlled input
        onChangeText={setTask} // Update state as user types
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
