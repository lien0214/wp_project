import seatHandling from '../../util/seatHandling';
import {QryEmpty, SeatReturn, SeatRent, QryPosition, AcntRegister, LogCheck} from '../../util/ApiFunc'
import Cell from './Cell';
import Cover from './Cover';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import ReplyIcon from '@mui/icons-material/Reply';
import Button from '@material-ui/core/Button';
import { Avatar } from '@mui/material';

const rent = 0, ret = 1, search = 2;
const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;
const Selecting = ({ register, setPerson, person, setSelectState, endOnClick, backToHomeOnClick, cover, setCover, seatLiShin, seatShinGuan}) => {
    
    let seatid = 0;
    
    //then get data from backend, maybe list of objects with accounts' information
    
    const coverOnclick = async (cellInfo) => {
        seatid = cellInfo.id;
        setCover(true);
        let newPerson = person;
        newPerson['seatID'] = seatid;
        setPerson(newPerson);
        // console.log(person.account, person.password, wheretosit, seatid);
        if(register === rent) await SeatRent(person.account, person.password, wheretosit, seatid);
        else if(register === ret) await SeatReturn(person.account, person.password);
    }
    const setPersonOnClick = async () => {
        let newPerson = person;
        newPerson['seatID'] = seatid;
        setPerson(newPerson);
        // console.log(person.account, person.password, wheretosit, seatid);
        if(register === rent) await SeatRent(person.account, person.password, wheretosit, seatid);
        else if(register === ret) await SeatReturn(person.account, person.password);
        
        // setSelectState(login);
        // endOnClick();
    }
    const backToLoginOnClick = () => {
        setSelectState(login);
    }

    // ret = await AcntRegister(account, password);

    const { rowSize, columnSize, size, seat } = person.wheretosit === Lishin ? seatLiShin : seatShinGuan;
    return (
        <Grid container component="main" sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            alignItems: 'center',
            overflow: 'auto',
            }}>
        
            <CssBaseline />

            {person.wheretosit === ShinGuan && (
                <Grid className='ShinGuan' item xs={9} sm={9} md={9}>
                    <Box sx={{
                        // my: 10,
                        // mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        overflow: 'auto',
                        }}>
                        {seat.map((row, r) => {
                            return(
                            <Box id={'row' + r.toString()} key={'row' + r.toString()}
                                        sx={{
                                            my: 1,
                                            mx: 2,
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent:'center',
                                        }}>
                                {row.map((cell, c) =>
                                    <Cell
                                        where={ShinGuan}
                                        cellInfo={cell}
                                        coverOnClick={coverOnclick}
                                        register={register}
                                        key={r + '-' + c}
                                        id={cell.id}
                                    />
                                )}
                            </Box>
                            )
                        })}
                    </Box>
                </Grid>
            )}
            {person.wheretosit === Lishin && (
                <Grid className='LiShin' item xs={9} sm={9} md={9}>
                    <Box sx={{
                        // my: 8,
                        // mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        overflow: 'auto',
                        }}>
                    {seat.map((row, r) => {
                        return (
                        <Box id={'row' + r.toString()} key={'row' + r.toString()}
                            sx={{
                                my: 1,
                                mx: 2,
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent:'center',
                            }}>
                            {row.map((cell, c) =>
                                <Cell
                                    where={Lishin}
                                    cellInfo={cell}
                                    coverOnClick={coverOnclick}
                                    register={register}
                                    key={r + '-' + c}
                                    id={cell.id}
                                />
                            )}
                        </Box>
                        )
                    })}
                </Box>
                </Grid>
            )}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'absolute',
                left: '85%',
                top: '-5%',
                m: 3
            }}>
                <Button 
                onClick={backToHomeOnClick}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <ReplyIcon/>
                    </Avatar>
                </Button>
            </Box>
            {cover && <Cover backToHomeOnClick={backToHomeOnClick} register={register}/>}
        </Grid>
    )
}
export default Selecting;

// const handleRent = async () => {
//     const {
//       data: { message,  },
//     } = await axios.rent('/infor', {
//       account,
//       password,
//       position,
//     });
// }
