import './Select.css';
import React, { useState } from 'react';
import Login from './Select/Login';
import WhereToSit from './Select/WhereToSit';
import Selecting from './Select/Selecting';

const login = 0, wheretosit = 1, selecting = 2;
const outside = false, inside = true; // outside/ShinGuan inside/LiShin
const Select = ({endOnClick, register}) => {
    const [state, setState] = useState(login);
    
    const [registeredSeat, setRegisteredSeat] = useState([]); //get data from backend, maybe list of objects with accounts' information
    const [whereToSit, setWhereToSit] = useState(outside);
    
    

    return (
        <div className='Select'>
            {/* check folder select */}
            {/*
                if state === login
                todo: login page and modify state
            */}
            {/*
                if state === wheretosit
                todo: set where to sit and 
            */}
            {/*
                if state === selecting
                input: wheretosit
                todo: seat select and endOnclick
            */}
        </div>
    )
}
export default Select;