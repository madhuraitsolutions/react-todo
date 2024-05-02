import { Input } from "./components/Input"
import { Board } from "./components/Board"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [taskList, setTaskList] = useState([])
  //console.log(taskList);
  useEffect(() => {
    console.log(taskList);
  }, [taskList])
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-3xl font-semibold">02.TODO Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* list of tasks using map() */}
        {taskList.map((task, index) => (
          <Board
            key={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>

  )
}

export default App
