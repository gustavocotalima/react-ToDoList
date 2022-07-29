import { PlusCircle } from 'phosphor-react';
import { FormEvent } from 'react';
import styles from './newTask.module.css';

export function NewTask() {

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        console.log('new task');
    }

    return (
        <form className={styles.newTask} onSubmit={handleCreateNewTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type='submit'>Criar <PlusCircle/> </button>
        </form>
    );
}