import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import React from 'react';
import { useState } from "react";



function App() {
  //Events are stored in app component
  //app level state

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: 'Feb 7th at 2:30pm',
      reminder: false,
    },
  ])

  //Add task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000 + 1)

    //create new task object. Use ... to copy contents of task data
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
    // console.log(task)
  }

  // Delete Task
  //keep every task except the one you are trying to delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    //set the task reminder to the opposite of whatever it currently is
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //pass in tasks as props

  //&& allows you to do a ternary operator without any else clause
  return (
    <div className="container">
      <Header onToggleAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} />) :
        ("There are no tasks to show")}

    </div>
  );
}

export default App;


//can wrap everythign in <> if you wanto to