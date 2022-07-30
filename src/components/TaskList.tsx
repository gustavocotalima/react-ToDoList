import { useState } from 'react';
import styles from './TaskList.module.css';

import clipboardImg from '../assets/clipboard.svg';
import { Task } from './Task';
import { NewTask } from './newTask';

interface Task {
    id: number,
    isComplete: boolean,
    task: string
}

export function TaskList(){
    const [tasks, setTasks] = useState(Array<Task>());

    const [newTaskId, setNewTaskId] = useState(1);
    
    function newTask(task: string){
        setTasks([...tasks, {id: newTaskId, isComplete: false, task: task}]);
        setNewTaskId(newTaskId+1);
    }

    function deleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function changeTaskState(id: number) {
        setTasks(tasks.map(task => (task.id === id ? {...task, isComplete: !task.isComplete} : task)));
    }

    return (
        <>
        <NewTask onNewTask={newTask}/>
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
                        <Task 
                            key={task.id} 
                            id={task.id} 
                            isComplete={task.isComplete} 
                            task={task.task} 
                            onDeleteTask={deleteTask} 
                            onChangeTaskState={changeTaskState}/>
                    )
                })}
            </div>
        </div>
        </>
    );
}