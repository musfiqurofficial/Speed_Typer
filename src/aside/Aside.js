import React from 'react';
import { useState } from 'react';
import './Aside.css'
const Aside = ({ exerciseTime }) => {
    const [breakTime, setBreakTime] = useState(0)

    const allTime = exerciseTime.reduce((p, c) => p + c, 0)

    const addBreakTime = (e) => {
        setBreakTime(e.target.innerText)
        const timeDB = localStorage.getItem(e.target.innerText);
        if (timeDB) {
            const newTime = parseInt(timeDB) + 1
            localStorage.setItem(e.target.innerText, newTime)
        } else {

            localStorage.setItem(e.target.innerText, 1)
        }
    }
    console.log(breakTime)
    return (
        <div className='container mx-auto w-11/12 mt-3'>
            <div className='flex items-center'>
                <div>
                    <img src="https://manager.almadarisp.com/user/img/user.png" className='w-20' alt="" />
                </div>
                <div className='m-3'>
                    <h3 className='text-xl font-semibold'>Md Musfiqur Rahman</h3>
                    <p>Jalokathi Sadar, Jalokathi</p>
                </div>
            </div>
            <div className='container mx-auto w-11/12 flex flex-space-between text-black bg-stone-200 rounded px-5 py-3 drop-shadow-md my-5'>
                <div>
                    <h2 className='text-2xl font-bold'>73<span className='text-sm font-normal'>kg</span></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>6.5</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>25<span className='text-sm font-normal'>yrs</span></h2>
                    <p>Age</p>
                </div>
            </div>
            <h3 className='text-center text-lg font-semibold'>Add A Break</h3>
            <div className='container mx-auto w-11/12 flex flex-space-between text-black bg-stone-200 rounded px-3 py-3 drop-shadow-md my-5'>
                <div>
                    <button onClick={addBreakTime} className='rounded-full bg-white p-2'><span>10</span></button>
                </div>
                <div>
                    <button onClick={addBreakTime} className='rounded-full bg-white p-2'><span>15</span></button>
                </div>
                <div>
                    <button onClick={addBreakTime} className='rounded-full bg-white p-2'><span>20</span></button>
                </div>
                <div>
                    <button onClick={addBreakTime} className='rounded-full bg-white p-2'><span>35</span></button>
                </div>
                <div>
                    <button onClick={addBreakTime} className='rounded-full bg-white p-2'><span>50</span></button>
                </div>
            </div>
            <h3 className='text-center text-lg font-semibold'>Exercise Details</h3>
            <div className='container mx-auto w-11/12 flex flex-space-between text-black bg-stone-200 rounded px-3 py-3 drop-shadow-md my-5'>
                <div>
                    <p className='font-semibold text-lg'>Exercise time</p>
                </div>
                <div>
                    <p className='text-slate-400'><span>{allTime}</span> minute</p>
                </div>
            </div>
            <div className='container mx-auto w-11/12 flex flex-space-between text-black bg-stone-200 rounded px-3 py-3 drop-shadow-md mt-3'>
                <div>
                    <p className='font-semibold text-lg'>Break time</p>
                </div>
                <div>
                    <p className='text-slate-400'><span>{breakTime}</span> minute</p>
                </div>
            </div>
            <div className='container w-11/12 my-10 flex justify-center'>
                <button className="w-11/12 py-4 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Activity Completed
                </button>
            </div>
        </div>
    );
};

export default Aside;