import './SeatSelect.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import HomePage from '../components/Homepage';
import Select from '../components/Select';
import Restart from '../components/Restart';
import Box from '@mui/material/Box';

// set state constants
const homepage = 0, select = 1, restart = 2;
const SeatSelect = () => {
    const [state, setState] = useState(homepage);
    const [register, setRegister] = useState(true); // register/rent or return
    const navigate = useNavigate();

    useEffect(() => {
        switch(state) {
            case homepage:
                navigate('/HomePage');
                break;
            case select:
                navigate('/Select');
                break;
            case restart:
                navigate('/Restart');
                break;
        }
    }, [state]);

    // func to change state in homepage
    const startRentOnClick = () => {
        setRegister(true);
        setState(select);
    }
    const startReturnOnClick = () => {
        setRegister(false);
        setState(select);
    }
    const startSearchOnClick = () => {
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
        <Box className="SeatSelect">
            {(state === homepage) && <HomePage
                startRentOnClick={startRentOnClick}
                startReturnOnClick={startReturnOnClick}
                startSearchOnClick={startSearchOnClick}
            />}
            {(state === select) && <Select
                endOnClick={endOnClick}
                register={register}
            />}
            {(state === restart) && <Restart
                backToHomeOnClick={backToHomeOnClick}
            />}
        </Box>
    )

}
export default SeatSelect;