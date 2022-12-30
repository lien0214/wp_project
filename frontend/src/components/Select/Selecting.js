import './Selecting.css';
import React, { useState } from 'react';

const Selecting = ({register, setPerson, person, setState, endOnClick}) => {

    const [registeredSeat, setRegisteredSeat] = useState([]); //get data from backend, maybe list of objects with accounts' information
    const appendPersonOnClick = () => {
        setRegisteredSeat([...registeredSeat, person]);
    }
    // console.log(person)
    if(person.wheretosit){
        return (
            <div className='Selecting'>
                <div className='table1'></div>
            </div>
        )
    }
    
}
export default Selecting;
