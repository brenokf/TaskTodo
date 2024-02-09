
import styles from './Info.module.css'
import { useState,useEffect } from 'react'

export function Info({ tasks,taskUpdated }){
    const [totalTasks,setTotalTasks] = useState(0)
    const [doneTasks, setDoneTasks] = useState(0);


    useEffect(()=>{
        const taskDoneSize =  taskUpdated.filter(task=>task.done).length
        const totalTasksSize = tasks.length-1 
        setDoneTasks(taskDoneSize)
        setTotalTasks(totalTasksSize)
    })
    
    return(
    <div className={styles.infoTasks} >
        <div className={styles.created}>
            <h4>Tarefas Criadas</h4>
            <div className={styles.counter}>
                <p>{totalTasks}</p>
            </div>
        </div>
        <div className={styles.done} >
            <h4>Concluidas</h4>
            <div className={styles.counter} >
                <p>{doneTasks} de {totalTasks}</p>
            </div>
        </div>
    </div>
    )
}