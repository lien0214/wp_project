import './Select.css';
import React, { useEffect, useState } from 'react';
import Login from './Select/Login';
import WhereToSit from './Select/WhereToSit';
import Selecting from './Select/Selecting';

const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;
const Select = ({register, endOnClick}) => {
    const [state, setState] = useState(login);
    const [person, setPerson] = useState({});

    console.log("select person ", person);



    return (
        <div className='Select'>
            {/* check folder select */}
            {state === login && <Login
                register={register}
                setPerson={setPerson}
                setState={setState}
            />}
            {register && state === wheretosit && <WhereToSit
                person={person}
                setPerson={setPerson}
                setState={setState}
            />}
            
            {state === selecting && <Selecting
                register={register}            
                setPerson={setPerson}
                person={person}
                setState={setState}
                endOnClick={endOnClick}
            />}
        </div>
    )
}
export default Select;