import { useState } from 'react';
import './App.css';
import Aside from './aside/Aside';
import Gymnasium from './main/Gymnasium/Gymnasium';
import Qus from './main/Qus/Qus';

function App() {
  const [exerciseTime, setExerciseTime] = useState([])
  const addToExerciseTime = (time) => {
    const allTime = [...exerciseTime, time]
    setExerciseTime(allTime);
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 bg-stone-200">
      <div className='container mx-auto w-11/12 lg:col-span-3 md:col-span-2 sm:col-span mt-8'>
        <h1 className='inline-flex items-center flex-row-reverse font-bold text-4xl text-sky-500'><img src="zero-gym.png" className='w-24 ' alt="" />Zero Gym</h1>
        <h3 className='font-semibold text-2xl'>Select today's exercise</h3>
        <Gymnasium addToExerciseTime={addToExerciseTime}></Gymnasium>

        <div className='mb-10'>
          <Qus></Qus>
        </div>
      </div>

      <div className='bg-stone-50 drop-shadow-lg'>
        <Aside exerciseTime={exerciseTime}></Aside>
      </div>
    </div>
  );
}

export default App;
