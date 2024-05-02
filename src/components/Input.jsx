import React from 'react'

export const Input = ({ taskList, setTaskList}) => {
  const [input, setInput] = React.useState('')
  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]) // add new task
  }
  return (
    <>
      <form>
        <input
          className='rounded border-gray-300'
          type="text"
          placeholder='Add a new task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </form>
    </>
  )
}
