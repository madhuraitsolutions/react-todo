import { Input } from "./components/Input"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [taskList, setTaskList] = useState([])
  //console.log(taskList);
  useEffect(() => {
    console.log(taskList);
  }, [taskList])
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h1 className="text-3xl font-semibold">02.TODO Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      <div>
        {/* list of tasks using map() */}
        {taskList.map((task, index) => (
          <div key={index}>{task}</div>
        ))} 
      </div>
    </div>
  )
}

export default App
