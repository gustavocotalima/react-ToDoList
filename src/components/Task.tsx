import { Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    id: number;
    isComplete: boolean,
    task: string,
    onDeleteTask: (id: number) => void;
  }

export function Task({id, isComplete, task, onDeleteTask} : TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <div className={styles.task}>
             <button title='Marcar tarefa como concluída' className={styles.checkButton}><Circle size={24}/></button>
            <p> { task } </p>
            <button 
                title='Deletar tarefa' 
                className={styles.deleteButton}
                onClick={handleDeleteTask}>
                    <Trash size={24}/>
            </button>
        </div>
    );
}