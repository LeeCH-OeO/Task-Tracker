import Header from "./componnents/Header";
import Tasks from "./componnents/Tasks";
import { useState } from 'react';
import AddTask from "./componnents/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([]
  )
  const deleteTask = (id) =>{
    setTask(tasks.filter((task) => task.id !== id))
  }
  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id ===id ? { ...task, reminder: !task.reminder} : task))
  }
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*10000) +1
    const newTask = {id,...task}
    setTask([...tasks, newTask])
  }
  return (
    <div className="container">
      <Header name='Task Tracter' onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length >0 ?(<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle={toggleReminder} />) : ('No Task')}
    </div>
  );
}

export default App;
