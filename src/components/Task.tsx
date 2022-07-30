import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    id: number;
    isComplete: boolean,
    task: string,
    onDeleteTask: (id: number) => void;
    onChangeTaskState: (id: number) => void;
  }

export function Task({id, isComplete, task, onDeleteTask, onChangeTaskState} : TaskProps) {
    function handleTaskState() {
        onChangeTaskState(id);
    }
    
    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <div className={styles.task}>
            <button 
                disabled={isComplete} 
                title='Marcar tarefa como concluída' 
                className={styles.checkButton}
                onClick={handleTaskState}>
                    <Circle size={24}/>
            </button>
            <button 
                disabled={!isComplete} 
                title='Marcar tarefa como não concluída' 
                className={styles.checkedButton}
                onClick={handleTaskState}>
                    <CheckCircle size={24}/>
            </button>
            <p className={isComplete?styles.complete:''}>{ task }</p>
            <button 
                title='Deletar tarefa' 
                className={styles.deleteButton}
                onClick={handleDeleteTask}>
                    <Trash size={24}/>
            </button>
        </div>
    );
}