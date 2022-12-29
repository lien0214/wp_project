import './Select.css';
import React, { useEffect, useState } from 'react';
import Login from './Select/Login';
import WhereToSit from './Select/WhereToSit';
import Selecting from './Select/Selecting';

const login = 0, wheretosit = 1, selecting = 2;
const outside = false, inside = true; // outside/ShinGuan inside/LiShin
const Select = ({endOnClick, register}) => {
    const [state, setState] = useState(login);
    
    const [person, setPerson] = useState({});
    
    

    return (
        <div className='Select'>
            {/* check folder select */}
            {state === login && <Login
                setPerson={setPerson}
            />}
            {register && state === wheretosit && <WhereToSit
                person={person}
                setPerson={setPerson}
            />}
            {state === selecting && <Selecting
                register={register}
                person={person}                
                setPerson={setPerson}
            />}
        </div>
    )
}
export default Select;