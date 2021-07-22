import Header from "./componnents/Header";
import { useState, useEffect } from 'react';
import AddTask from "./componnents/AddTask";
import {db} from "./Firebase"
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { googleProvider } from "./authMethod";
import SocialAuth from "./auth";
import firebase from "firebase"


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
          reminder: doc.data().reminder,
          uid: doc.data().uid
        }))
      )
    })

  }
  const deleteTask = (id) =>{        
    db.collection("task").doc(id).delete()
  }
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*10000) +1
    const newTask = {id,...task}
    setTask([...tasks, newTask])
    db.collection("task").add({
      reminder: newTask.reminder,
      task: newTask.text,
      time: newTask.day,
      uid: firebase.auth().currentUser.uid,

    })
  }
  const handleOnclick = async(provider)=>{
    await SocialAuth(provider)
    window.location.reload();
   
  }
   return (
    <div className="container">
      <Button onClick={()=>handleOnclick(googleProvider)} variant="contained" color="primary" size="small"git>
      login
      </Button>
      <Header name='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {dbTask.map(dbtask =>(
        <div style={{display: "flex"}}>
          <ListItem>
            <ListItemText primary={dbtask.text} secondary={(dbtask.day)+(dbtask.reminder ? ("🔔") : ("🔕"))}  />
          </ListItem>
          <Button  onClick={() => 
            ((firebase.auth().currentUser.uid===dbtask.uid) ? deleteTask(dbtask.id): alert("權限不足"))} >X</Button>
        </div>))}
      
    </div>
  );
}

export default App;



