import { useState } from 'react';
import { DosContext } from './DosContext';
import './App.css'

import Inputer from './components/Inputer'
import Lists from './components/Lists'

function App() {
  const [dos, setDos] = useState({'todos': [], 'dones': []})

  function setTodo(todo) {
    let newTodo = [todo, getDate()]
    setDos(prev => ({...prev, 'todos': [...prev.todos, newTodo]}))
  }

  function getDate() {
      let now = new Date
      let day = format(now.getDate())
      let month = format(now.getMonth() + 1)
      let year = format(now.getFullYear())
  
      let hour = now.getHours()
      let minutes = now.getMinutes()
      let seconds = now.getSeconds()
      
      let date = [day, month, year].join('/')
      let time = [hour, minutes, seconds].join(':')
  
      return date + ' - ' + time
  
    }
  
    function format(date) {
        return date.toString().padStart(2,'0')
  }
  
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Inputer 
        setTodo={setTodo} 
        />
      <DosContext.Provider value={{dos, setDos}}>
        <Lists dos={dos} />
      </DosContext.Provider>
    </div>
  );
}

export default App;
