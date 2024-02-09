import { Clipboard } from 'phosphor-react'
import styles from './Empty.module.css'
export function Empty(){
    return(
        <div className={styles.emptyTasks}>
            <Clipboard size={80}/>
            <p><strong>Você ainda não tem Tarefas Cadastradas </strong> <br /> Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}