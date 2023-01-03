import seatHandling from '../../util/seatHandling';
import {QryEmpty, SeatReturn, SeatRent, QryPosition, AcntRegister, LogCheck} from '../../util/ApiFunc'
import Cell from './Cell';
import Cover from './Cover';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import NumbersIcon from '@mui/icons-material/Numbers';
import TextField from '@mui/material/TextField';

const rent = 0, ret = 1, search = 2;
const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;
const Selecting = ({ register, setPerson, person, setSelectState, endOnClick, backToHomeOnClick, cover, setCover}) => {

    
    const [coverPerson, setCoverPerson] = useState({});
    const [seatid, setSeatid] = useState(0);
    
    //then get data from backend, maybe list of objects with accounts' information
    
    const seatidOnchange = (newSeatid) => {
        setSeatid(newSeatid);
    }
    const coverOnclick = (newCoverPerson) => {

        setCover(true);
        setCoverPerson(newCoverPerson);
        setPersonOnClick();
    }
    const noCoverOnClick = () => {
        setCover(false);
        setCoverPerson({});
    }
    const setPersonOnClick = async () => {
        let newPerson = person;
        newPerson['seatID'] = seatid;
        setPerson(newPerson);
        console.log(person.account, person.password, wheretosit, seatid);
        if(register === rent) await SeatRent(person.account, person.password, wheretosit, seatid);
        else if(register === ret) await SeatReturn(person.account, person.password);
        
        // setSelectState(login);
        // endOnClick();
    }
    const backToLoginOnClick = () => {
        setSelectState(login);
    }

    // ret = await AcntRegister(account, password);

    const { rowSize, columnSize, size, seat } = seatHandling(register, person);
    //const seat = [];
    /* seat is 2-D list of {
        id: id,
        registered: false,      
        r: r, c: c,
        person: {},
        ifReturn: false
    }*/

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
                                    key={r + '-' + c}
                                />
                            )}
                        </Box>
                        )
                    })}
                </Box>
                </Grid>
            )}







            {/* submit text and a button for submit by calling setPersonOnClick */}
            {/* {register !== 2 && 
                <Grid item xs={3} sm={3} md={3} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'auto',
                  }}
                >
                  <Avatar sx={{ mt: 1, bgcolor: 'error.main' }}>
                    <NumbersIcon/>
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{mb: 4}}>
                    請輸入座位號碼
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="seat number"
                    label="seat number"
                    name="seat number"
                    autoComplete="seat number"
                    autoFocus
                    value={seatid}
                    onChange={(e) => seatidOnchange(e.target.value)}
                    //這裡要寫hook
                  />
                  <Box sx={{ m: 3, width: "90%"}}>
                      {register === 0 && <Button
                          type="submit"
                          margin="normal"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2}}
                          color="primary"
                          style={{fontSize: '25px', color: 'white'}}
                          onClick={setPersonOnClick}
                      >
                          租借
                      </Button>
                        }

                      {register === 1 && <Button
                          type="submit"
                          margin="normal"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2}}
                          color="primary"
                          style={{fontSize: '25px', color: 'white'}}
                          onClick={setPersonOnClick}
                      >
                          歸還
                      </Button>
                        }
                  </Box>
                </Box>
              </Grid>
            }



            //  two button for yes(endOnClick) or no(backToLoginOnClick) 
            {register === 2 &&                
                <Grid item xs={3} sm={3} md={3} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'auto',
                  }}
                >
                  <Avatar sx={{ mt: 1, bgcolor: 'error.main' }}>
                    <NumbersIcon/>
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{mt: 2}}>
                    綠色：可借座位
                  </Typography>
                  <Typography component="h1" variant="h5" sx={{mt: 1}}>
                    灰色：不可借座位
                  </Typography>
                  <Typography component="h1" variant="h5" sx={{mt: 1}}>
                    黃色：你已借座位
                  </Typography>
                  
                  <Box sx={{ m: 3, mt: 6, width: "90%"}}>
                    <Button
                        type="submit"
                        margin="normal"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2}}
                        color="primary"
                        style={{fontSize: '25px', color: 'white'}}
                        onClick={endOnClick}
                    >
                        回首頁
                    </Button>
                  </Box>
                </Box>
              </Grid>
            } */}
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
