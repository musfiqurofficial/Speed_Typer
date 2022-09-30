import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Gym from '../Gym/Gym';

const Gymnasium = (props) => {
    const [gymnasium, setGymnasium] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGymnasium(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4 mb-20'>
            {
                gymnasium.map(gym => <Gym
                    addToExerciseTime={props.addToExerciseTime}
                    key={gym.id}
                    gym={gym}
                ></Gym>)
            }
        </div>
    );
};

export default Gymnasium;