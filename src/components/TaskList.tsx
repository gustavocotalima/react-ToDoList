import { useState } from 'react';
import styles from './TaskList.module.css';

import clipboardImg from '../assets/clipboard.svg';

export function TaskList(){
    const [createdTasks, setCreatedTasks] = useState([0]);
    const [completedTasks, setCompletedTasks] = useState([0]);

    return (
        <div className={styles.container}>
            <div className={styles.tasksCounter}>
                <p>Tarefas criadas<span>{createdTasks}</span></p>
                <p>Concluídas<span>{completedTasks}</span></p>
            </div>
            <div className={styles.emptyList}>
                <img src={clipboardImg} alt="Clipboard" />
                <div>
                    <h1>Você ainda não tem tarefas cadastradas</h1>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    );
}