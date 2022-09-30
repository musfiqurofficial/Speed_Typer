import { useState } from 'react';
import './App.css';
import Aside from './aside/Aside';
import Gymnasium from './main/Gymnasium/Gymnasium';

function App() {
  const [exerciseTime, setExerciseTime] = useState([])
  const addToExerciseTime = (time) => {
    const allTime = [...exerciseTime, time]
    setExerciseTime(allTime);
  }
  
  return (
    <div className="grid grid-cols-4 bg-stone-200">
      <div className='container mx-auto w-11/12 col-span-3 mt-20'>
        <h1 className='inline-flex items-center flex-row-reverse font-bold text-4xl text-sky-500'><img src="zero-gym.png" className='w-24 ' alt="" />Zero Gym</h1>
        <h3 className='font-semibold text-2xl'>Select today's exercise</h3>
        <Gymnasium addToExerciseTime={addToExerciseTime}></Gymnasium>
      </div>

      <div className='bg-stone-50 drop-shadow-lg'>
        <Aside exerciseTime={exerciseTime}></Aside>
      </div>
    </div>
  );
}

export default App;
