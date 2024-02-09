import styles from './Tasks.module.css'
import { Empty } from './Empty';
import { List } from './List';
import { Info } from './info';
import { useState } from 'react';

export function Tasks({ newTask,onDeleteTaskNewTask }){

    const [statusTask,setStatusTask] = useState([])
    const [updateStatusTask,setupdateStatusTask] = useState([''])
    if(newTask.length==1){
        return <Empty/> 
    }
    const doneChange = (tasks)=>{
        setStatusTask(tasks)
        setupdateStatusTask([''])
    }

    function deleteTask(taskToDelete){
        console.log('taskToDelete',statusTask)
            const deleteTaskUpdateStatus = statusTask.filter(deleteStack=>{
                return deleteStack!==taskToDelete
            })
            setStatusTask(deleteTaskUpdateStatus)
            onDeleteTaskNewTask(taskToDelete[0])
    }

    return(
        <div className={styles.tasksContent}>
            <Info tasks={newTask} taskUpdated={statusTask}/> 
            {
                newTask.map(task=>{
                        return task.id?
                        <List 
                            key={task.id} 
                            tasks={newTask} 
                            content={task.content} 
                            done={doneChange}
                            onDelete={deleteTask} 
                        />:null
                    })
            }
        
        </div>
    )
}