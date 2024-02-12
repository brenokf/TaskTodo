import { Header } from './components/Header'
import './App.module.css'
import styles from './App.module.css';
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

function App() {
  const [newTask,setNewTask] = useState([{id:0,content:'',done:false}])
  const [newTaskText,setNewTaskText] = useState('')
    function handleCreateNewTask(event){
        event.preventDefault();
        const newTaskValue = {
          id:newTask.length,
          content:event.target.newtask.value,
          done:false
        };
        
        handleSomeTaskInvalid(newTaskValue)
        setNewTaskText('')
    }
    function handleNewTaskChange(){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value);
        
    }
    function onDeleteTaskNewTask(taskToDelete){
        const newTaskUpdate = newTask.filter(task=>task.id !== taskToDelete.id)
        setNewTask(newTaskUpdate)
    }

    function handleEmptyTask(){
      event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function handleSomeTaskInvalid(checkTask){
        const newTaskUpdate = newTask.filter(task=> checkTask.content === task.content)
        newTaskUpdate.length>0?alert('Essa Tarefa já existe'):setNewTask([...newTask, checkTask]);
  }
  const isNewTaskEmpty = newTask.length===0;

  return (
    <>
    <Header></Header>
      <div className={styles.wrapper}>
          <main>
          <NewTask
          handleCreateNewTask={handleCreateNewTask} 
          handleNewTaskChange={handleNewTaskChange}
          disabled={isNewTaskEmpty}
          handleTaskInvalid={handleEmptyTask}
          value={newTaskText}/>  
            <Tasks newTask={newTask} onDeleteTaskNewTask={onDeleteTaskNewTask} />
          </main>
      </div>
    </>
  )
}

export default App
