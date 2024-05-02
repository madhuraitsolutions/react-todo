import { Input } from "./components/Input"
import "./App.css"
import { useState } from "react"

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <div className="flex flex-col items-center justify-items-center ">
      <h1>02.TODO Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}

export default App
