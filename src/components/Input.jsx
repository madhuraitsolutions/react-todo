import React from 'react'

export const Input = ({ taskList, setTaskList}) => {
  const [input, setInput] = React.useState('')
  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]) // add new task
    setInput('') // clear input
  }
  return (
    <>
      <form className='flex flex-row items-center gap-4'>
        <input
          className='rounded-lg border-gray-300 py-1 px-2 text-lg'
          type="text"
          placeholder='Add a new task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='rounded-lg bg-blue-500 py-1 px-4 text-white text-lg' onClick={handleAddTask}>Add</button>
      </form>
    </>
  )
}
