import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './newTask.module.css';

interface TaskProps {
    onNewTask: (task: string) => void;
}

export function NewTask({onNewTask}: TaskProps) {

    const [newTaskText, setNewTaskText] = useState('');

    const isNewTaskTextEmpty = newTaskText.length===0;

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        onNewTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Comentário inválido");
    }

    return (
        <form className={styles.newTask} onSubmit={handleCreateNewTask}>
            <input 
                placeholder="Adicione uma nova tarefa" 
                value={newTaskText}
                onChange={handleNewTaskChange} 
                onInvalid={handleNewTaskInvalid}
                required
                
                />
            <button type='submit' disabled={isNewTaskTextEmpty}>Criar <PlusCircle/> </button>
        </form>
    );
}