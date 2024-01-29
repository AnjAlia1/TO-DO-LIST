import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskInputdata, settaskInputdata] = useState('');


  const setTask = (e) => {
    settaskInputdata(e.target.value)
  }

  const addTask = (e) => {
    if (taskInputdata == '') return;
    setTasks([...tasks, taskInputdata])
    settaskInputdata('');
  }

  const markDoneTask = (e) => {
    console.log(e.target.parentElement.parentElement.task)

  }
  const deleteTask = (e) => {

  }

  const resetTasks = () => {
    setTasks('');
  }

  return (
    <div className="App">
      <h1>TO-DO-LIST </h1>
      <div id="input-add-task-div">
        <input
          type="text"
          value={taskInputdata}
          onChange={setTask}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}
              <button onClick={markDoneTask}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={() => deleteTask(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Tasks Available</p>
      )
      }
      <button id="reset-button" onClick={resetTasks}>Reset</button>

    </div >
  );
}

export default App;
