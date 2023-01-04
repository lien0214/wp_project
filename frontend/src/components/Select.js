
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Login from './Select/Login';
import WhereToSit from './Select/WhereToSit';
import Selecting from './Select/Selecting';
import Grid from '@mui/material/Grid';

const rent = 0, ret = 1, search = 2;
const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;
const Select = ({register, endOnClick, backToHomeOnClick, forgetOnClick}) => {
    const [selectState, setSelectState] = useState(login);
    const [person, setPerson] = useState({});
    const [cover, setCover] = useState(false);
    const [coverSeatId, setCoverSeatId] = useState(0);
    return (
        <Grid container component="main" sx={{ height: '80vh' }}
            
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
            {/* check folder select */}
            {/* {register !== search && } */selectState === login && <Login
                register={register}
                setPerson={setPerson}
                setSelectState={setSelectState}
                forgetOnClick={forgetOnClick}
            />}
            {/* {register === rent && } */selectState === wheretosit && <WhereToSit 
                person={person}
                setPerson={setPerson}
                setSelectState={setSelectState}
            />}
            {/* {register === search && <Selecting
                register={register}
                setPerson={setPerson}
                person={person}
                setSelectState={setSelectState}
                endOnClick={endOnClick}
            />
            } */}
            {selectState === selecting && <Selecting
                register={register}            
                setPerson={setPerson}
                person={person}
                setSelectState={setSelectState}
                endOnClick={endOnClick}
                backToHomeOnClick={backToHomeOnClick}
                cover={cover}
                setCover={setCover}
                coverSeatId={coverSeatId}
                setCoverSeatId={setCoverSeatId}
            />}
        </Grid>
    )
}
export default Select;