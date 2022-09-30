import React from 'react';

const Qus = () => {
    return (
        <div>
            {/* How dose React Work? */}
            <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                <h2 className='text-2xl font-bold text-amber-300'>01. How dose React Work?</h2>
                <p ><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>R</span>eact is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
            </div>
            {/* Difference between props and state? */}
            <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                <h2 className='text-2xl font-bold text-amber-300'>02. Difference between props and state.</h2>
                <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>P</span>rops are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            {/* What else does the useEffect API do other than load data? */}
            <div className='bg-zinc-800 text-white p-8 rounded-lg '>
                <h2 className='text-2xl font-bold text-amber-300'>03. What else does the useEffect API do other than load data?</h2>
                <ul className='list-disc mx-10'>
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                </ul>
            </div>
        </div>
    );
};

export default Qus;