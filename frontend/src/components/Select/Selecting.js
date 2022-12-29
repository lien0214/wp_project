import './Selecting.css';
import React from 'react';

const Selecting = (register, person, setPerson) => {

    const [registeredSeat, setRegisteredSeat] = useState([]); //get data from backend, maybe list of objects with accounts' information
    const appendPersonOnClick = () => {
        setRegisteredSeat([...registeredSeat, person]);
    }
    
    return (
        <div className='Selecting'>
        </div>
    )
}
export default Selecting;