import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[newTasks, setNewTasks]=useState(TASKS);
  const[filterdCategory, setFilteredCategory]=useState("All");


  function handleNewTaskSubmit(newTask){
  const updatedTasks = [...newTasks, newTask]
  setNewTasks(updatedTasks)
  }


  function handleDeleteTask(selectedTask){
    const updatedTasks = newTasks.filter((task)=> task.text !== selectedTask);
    setNewTasks(updatedTasks);
  }

  function handleCatergoryChange(category){
    setFilteredCategory(category);
  }

  const filteredTasks = newTasks.filter((task)=> filterdCategory === "All"|| task.category === filterdCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onChangeCaregory={handleCatergoryChange} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={handleNewTaskSubmit} categories = {CATEGORIES.filter(cat => cat !== "All")}/>
      <TaskList onDeleteTask ={handleDeleteTask} tasks={filteredTasks} />
    </div>
  );
}

export default App;
