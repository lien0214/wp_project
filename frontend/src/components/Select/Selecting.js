import seatHandling from '../../util/seatHandling';
import Cell from './Cell';
import Cover from './Cover';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';


const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;
const Selecting = ({ register, setPerson, person, setState, endOnClick }) => {

    const [cover, setCover] = useState(false);
    const [coverPerson, setCoverPerson] = useState({});
    const [people, setpeople] = useState([]);
    //then get data from backend, maybe list of objects with accounts' information

    const appendPerson = () => {
        setpeople([...people, person]);
    }
    const coverOnclick = (newCoverPerson) => {
        setCover(true);
        setCoverPerson(newCoverPerson);
    }
    const noCoverOnClick = () => {
        setCover(false);
        setCoverPerson({});
    }
    const setPersonOnclick = (seatID) => {
        let newPerson = person;
        newPerson['seatID'] = seatID;
        setPerson(newPerson);
        appendPerson();
        endOnClick();
    }
    const backToLoginOnClick = () => {
        setState(login);
    }

    const { rowSize, columnSize, size, seat } = seatHandling(register, people, person);
    //const seat = [];
    /* seat is 2-D list of {
        id: id,
        registered: false,      
        r: r, c: c,
        person: {},
        ifReturn: false
    }*/
    console.log(seat);

    return (
        <Grid container component="main" sx={{ height: '80vh'}}>
            <CssBaseline />
            {/* {cover && <Cover
                coverPerson={coverPerson}
                noCoverOnClick={noCoverOnClick}
            />} */}
            {person.wheretosit === ShinGuan && (
                <Grid item xs={9} sm={9} md={9} component={Paper} elevation={6} square>
                    <Box sx={{
                        my: 10,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        overflow: 'auto',
                        }}>
                        {seat.map((row, r) => {
                            return( <Box id={'row' + r.toString()} key={'row' + r.toString()}
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
                                        cellInfo={cell}
                                        coverOnClick={coverOnclick}
                                        // seat={}
                                        key={r + '-' + c}
                                    />
                                )}
                            </Box>
                            )
                        })}
                    </Box>
                    
                </Grid>
            )}
            {person.wheretosit === Lishin && (
                <div className='LiShin'>
                    {seat.map((row, r) => {
                        return (
                        <div id={'row' + r.toString()} key={'row' + r.toString()}>
                            {row.map((cell, c) =>
                                <Cell
                                    cellInfo={cell}
                                    coverOnClick={coverOnclick}
                                    key={r + '-' + c}
                                />
                            )}
                        </div>
                        )
                    })}
                </div>
            )}
            {register === true && 
                <div className='submitForm'>
                    {/* submit text and a button for submit by calling setPersonOnClick */}
                </div>
            }
            {register === false &&
                <div className='confirmSeatID'>
                    {/* two button for yes(endOnClick) or no(backToLoginOnClick) */}
                </div>
            }
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
