import React from 'react'

export const Board = ({ task, taskList, setTaskList }) => {

  const handleDeleteTask = () => {
    setTaskList(taskList.filter((todo) => todo !== task))

    //  let removeTask = taskList.indexOf(task);
    //  taskList.splice(removeTask, 1);
    //  setTaskList((currentTasks => currentTasks.filter(todo => todo !== task)))

    //  setTaskList([...taskList])
  }
  return (
    <>
      <div className='max-w-xl flex flex-col items-center justify-center border rounded-md p-6'>
        <p>{task}</p>
        <button 
          className='bg-red-500 text-white px-4 rounded-lg py-1' 
          onClick={handleDeleteTask}
        >
            delete
        </button>
      </div>
    </>
  )
}
