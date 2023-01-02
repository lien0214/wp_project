
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Login from './Select/Login';
import WhereToSit from './Select/WhereToSit';
import Selecting from './Select/Selecting';
import Grid from '@mui/material/Grid';

const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;
const Select = ({register, endOnClick}) => {
    const [state, setState] = useState(login);
    const [person, setPerson] = useState({});
    // const navigate = useNavigate();
    // useEffect(() => {
    //     switch(state) {
    //         case login:
    //             navigate('/Login');
    //             break;
    //         case wheretosit:
    //             navigate('/WhereToSit');
    //             break;
    //         case selecting:
    //             navigate('/Selecting');
    //             break;
    //     }
    // }, [state]);



    return (
        <Grid container component="main" sx={{ height: '80vh' }}
            direction="column"
            alignItems="center"
            justifyContent="center">
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
        </Grid>
    )
}
export default Select;