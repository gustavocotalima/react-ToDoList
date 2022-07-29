import { Header } from './components/Header'
import { NewTask } from './components/newTask'

import styles from './App.module.css'
import { TaskList } from './components/TaskList'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <TaskList />
      </div>
    </>
  )
}

export default App
