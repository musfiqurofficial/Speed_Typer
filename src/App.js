import './App.css';
import Gymnasium from './main/Gymnasium/Gymnasium';

function App() {
  return (
    <div className="grid grid-cols-4">
      <div className='container mx-auto w-11/12 col-span-3 mt-20'>
        <h1 className='inline-flex items-center flex-row-reverse font-bold text-4xl text-sky-500'><img src="zero-gym.png" className='w-24 ' alt="" />Zero Gym</h1>
        <h3 className='font-semibold text-2xl'>Select today's exercise</h3>
        <Gymnasium></Gymnasium>
      </div>
      <div className='bg-sky-500'>
      </div>
    </div>
  );
}

export default App;
