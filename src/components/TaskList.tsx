import { useState } from 'react';
import styles from './TaskList.module.css';

import clipboardImg from '../assets/clipboard.svg';
import { Task } from './Task';



export function TaskList(){
    const [tasks, setTasks] = useState([
        {
            id: 1,
            isComplete: false,
            task: 'aaLorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit, consequatur numquam et maxime inventore! Alias vitae dicta culpa?'
        },
        {
            id: 2,
            isComplete: true,
            task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit, consequatur numquam et maxime inventore! Alias vitae dicta culpa?'
        },
        ]
    );

    function deleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className={styles.container}>
            <div className={styles.tasksCounter}>
                <p>Tarefas criadas<span>{tasks.length}</span></p>
                <p>Concluídas<span>{tasks.filter(task => task.isComplete).length}</span></p>
            </div>
            <div className={tasks.length === 0 ? styles.emptyList : styles.emptyListHidden}>
                <img src={clipboardImg} alt="Clipboard" />
                <div>
                    <h1>Você ainda não tem tarefas cadastradas</h1>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
            <div className={styles.tasksList}>
                {tasks.map(task =>  { 
                    return (
                        <Task key={task.id} id={task.id} isComplete={task.isComplete} task={task.task} onDeleteTask={deleteTask}/>
                    )
                })}
            </div>
        </div>
    );
}