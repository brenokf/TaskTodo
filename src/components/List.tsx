
import styles from './List.module.css'
import {Trash, CheckCircle,Circle } from 'phosphor-react'
import{ useEffect, useState } from 'react'
export function List({content,tasks,done, onDelete}){
    const [checkedRound, setCheckedRound] = useState(false)
    function handleCheckboxChange(){
        const data = tasks.filter(task=>task.content === content)
        const index = tasks.indexOf(data[0])
        tasks[ index ].done = !checkedRound
        done(tasks)
        setCheckedRound(!checkedRound);
    }

    function handleDeleteTask(){
        const data = tasks.filter(task=>task.content === content)
        onDelete(data)
    }


    return(
        <>
                { 
                checkedRound?
                   <div className={styles.listTasksClosed} >
                       <CheckCircle  color="#5E60CE" weight="fill" onClick={handleCheckboxChange}/>
                       <input  type="checkbox" onChange={handleCheckboxChange}  checked={checkedRound}/>
                       <span   >{content}</span>
                       <button className={styles.button} onClick={handleDeleteTask}>
                           <Trash size={20}/>
                       </button>
                   </div>:<div className={styles.listTasksOpen}>
                   <Circle color="#4EA8DE" weight="duotone"  onClick={handleCheckboxChange}/>
                   <input type="checkbox" onChange={handleCheckboxChange} checked={checkedRound}/>
                   <span  >{content}</span>
                   <button className={styles.button} onClick={handleDeleteTask}>
                       <Trash size={20}/>
                   </button>
                  </div>  
                    
                    
               
                }
        </>
)}
