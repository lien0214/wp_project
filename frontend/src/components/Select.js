
import React, { useState } from 'react';
import Login from './Select/Login';
import WhereToSit from './Select/WhereToSit';
import Selecting from './Select/Selecting';
import Grid from '@mui/material/Grid';

// define some const
const rent = 0, ret = 1, search = 2;
const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;

const Select = ({register, endOnClick, backToHomeOnClick, forgetOnClick}) => {
    const [selectState, setSelectState] = useState(login);
    const [person, setPerson] = useState({});

    // { rowSize, columnSize, size(maxid), seat(2-DList) }
    const [seatLiShin, setSeatLiShin] = useState({});
    const [seatShinGuan, setSeatShinGuan] = useState({});

    const [cover, setCover] = useState(false);
    const [coverSeatId, setCoverSeatId] = useState(0);
    console.log(person);
    return (
        <Grid container component="main" sx={{ height: '80vh' }}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            {/* check folder select */}
            {selectState === login && <Login
                register={register}
                person={person}
                setPerson={setPerson}
                setSelectState={setSelectState}
                forgetOnClick={forgetOnClick}
                setSeatLiShin={setSeatLiShin}
                setSeatShinGuan={setSeatShinGuan}
            />}
            {selectState === wheretosit && <WhereToSit 
                person={person}
                setPerson={setPerson}
                setSelectState={setSelectState}
            />}
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
                seatLiShin={seatLiShin}
                seatShinGuan={seatShinGuan}
            />}
        </Grid>
    )
}
export default Select;