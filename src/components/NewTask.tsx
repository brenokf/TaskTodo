/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
export function NewTask({ 
    handleCreateNewTask,
    handleNewTaskChange,
    handleTaskInvalid,
    value,
    disabled}){

    return(
        <form data-testid="form" onSubmit={event=>handleCreateNewTask(event)} className={styles.actionTask}>
            <input
            data-testid="input"
            type='text' 
            name='newtask'  
            value={value} 
            onChange={event=>handleNewTaskChange(event)}
            placeholder='Adicione uma nova tarefa'
            onInvalid={handleTaskInvalid}
            required
            className={styles.input}
            />
                <button
                data-testid="button"
                type='submit'
                disabled={disabled} 
                className={styles.btnCreate}  
                > Criar 
                <PlusCircle size={16}/></button>
        </form>
    )
}