
import React, { useEffect, useState } from 'react';
import HomePage from '../components/Homepage';
import Select from '../components/Select';
import Restart from '../components/Restart';
import Box from '@mui/material/Box';

// set seatSelectState constants
const rent = 0, ret = 1, search = 2;
const homepage = 0, select = 1, restart = 2;
const SeatSelect = () => {
    const [seatSelectState, setSeatSelectState] = useState(homepage);
    const [register, setRegister] = useState(rent); // register/rent or return

    // func to change seatSelectState in homepage
    const startRentOnClick = () => {
        setRegister(rent);
        setSeatSelectState(select);
    }
    const startReturnOnClick = () => {
        setRegister(ret);
        setSeatSelectState(select);
    }
    const startSearchOnClick = () => {
        setRegister(search);
        setSeatSelectState(select);
    }
    // func to change seatSelectState in select
    const endOnClick = () => {
        setSeatSelectState(homepage);
    }
    // func to change seatSelectState in restart
    const backToHomeOnClick = () => {
        setRegister(rent);
        setSeatSelectState(homepage);
    }

    // some func to add

    return (
        <Box className="SeatSelect">
            {(seatSelectState === homepage) && <HomePage
                startRentOnClick={startRentOnClick}
                startReturnOnClick={startReturnOnClick}
                startSearchOnClick={startSearchOnClick}
            />}
            {(seatSelectState === select) && <Select
                endOnClick={endOnClick}
                register={register}
            />}
            {/* {(seatSelectState === restart) && <Restart
                backToHomeOnClick={backToHomeOnClick}
            />} */}
        </Box>
    )

}
export default SeatSelect;