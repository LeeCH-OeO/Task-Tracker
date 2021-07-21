import Header from "./componnents/Header";
import { useState, useEffect } from 'react';
import AddTask from "./componnents/AddTask";
import {db} from "./Firebase"
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { googleProvider } from "./authMethod";
import SocialAuth from "./auth";




function App() {
  const [dbTask, setdbTask] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])
  useEffect(() => {
    getData()
  }, [])
  function getData(){
    db.collection("task").onSnapshot(function (querySnapshot){
      setdbTask(
        querySnapshot.docs.map((doc) => ({
          id : doc.id,
          text: doc.data().task,
          day: doc.data().time,
          reminder: doc.data().reminder
        }))
      )
    })
  }
  const deleteTask = (id) =>{
    db.collection("task").doc(id).delete()

  }
  // const toggleReminder = (id) => {
  //   setTask(tasks.map((task) => task.id ===id ? ({ ...task, reminder: !task.reminder}): task))
  // }
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*10000) +1
    const newTask = {id,...task}
    setTask([...tasks, newTask])
    db.collection("task").add({
      reminder: newTask.reminder,
      task: newTask.text,
      time: newTask.day,

    })
  }
  const handleOnclick = async(provider)=>{
    const res = await SocialAuth(provider)
    console.log(res)
  }
   return (
     
    <div className="container">
      <Button onClick={()=>handleOnclick(googleProvider)} variant="contained" color="primary" size="small"git>
      login
      </Button>
      <Header name='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {/* {tasks.length >0 ?(<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle={toggleReminder} />) : ('No Task')} */}
      {dbTask.map(dbtask =>(
        <div style={{display: "flex"}}>
          <ListItem>
            <ListItemText primary={dbtask.text} secondary={(dbtask.day)+(dbtask.reminder ? ("🔔") : ("🔕"))}  />
          </ListItem>
          <Button onClick={() => deleteTask(dbtask.id)}>X</Button>
        </div>
      ))}
      
    </div>
  );
}

export default App;



