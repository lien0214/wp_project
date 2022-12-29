import './SeatSelect.css';
import React, { useState } from 'react';
import HomePage from '../components/Hompage';
import Select from '../components/Select';
import Restart from '../components/Restart';

// set state constants
const homepage = 0, select = 1, restart = 2;
const SeatSelect = () => {
    const [state, setState] = useState(homepage);
    const [register, setRegister] = useState(false); // rent or return

    // func to change state in homepage
    const startRentOnClick = () => {
        setRegister(true);
        setState(select);
    }
    const startReturnOnClick = () => {
        setRegister(false);
        setState(select);
    }
    // func to change state in select
    const endOnClick = () => {
        setState(restart);
    }
    // func to change state in restart
    const backToHomeOnClick = () => {
        setRegister(false);
        setState(homepage);
    }

    // some func to add

    return (
        <div className="SeatSelect">
            {(state === homepage) && <HomePage
                startRentOnClick={startRentOnClick}
                startReturnOnClick={startReturnOnClick}
            />}
            {(state === select) && <Select
                endOnClick={endOnClick}
                register={register}
            />}
            {(state === restart) && <Restart
                backToHomeOnClick={backToHomeOnClick}
            />}
        </div>
    )

}
export default SeatSelect;