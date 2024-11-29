import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App() {
  const [tasks, setTasks] = useState([
    "Hurray!! One more month",
    "Do laundry",
    "Go to gym",
    "Walk dog",
    "ToDoLabs",
  ]);

  const addTask = (task) => {
    if (task.trim() !== "") {
      // To Ignore white space-only
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
