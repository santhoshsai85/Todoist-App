import React, { useState } from 'react';
import NavBar from './NavBar';
import { useLoaderData } from 'react-router';
import TaskList from './TaskList';
import TaskModalForm from './TaskModalForm';

export const initTask = {
  id: undefined,
  name: undefined,
  description: undefined,
};

const Home = () => {
  const tasks = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState(initTask);

  return (
    <>
      <NavBar />
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center w-96'>
          <div className='m-auto' style={{fontSize: "35px", fontWeight: "bold"}}>Tasks</div>
          <div className='flex justify-center'>
            <button className='my-2 rounded-md p-2 bg-blue-400' onClick={() => setIsOpen(true)}>Add Task</button>
          </div>
          <TaskList tasks={tasks} setTask={setTask} setIsOpen={setIsOpen}/>
        </div>
      </div>
      <TaskModalForm isOpen={isOpen} setIsOpen={setIsOpen} task={task} setTask={setTask} />
    </>
  )
}

export default Home;