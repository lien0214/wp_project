import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AcntRegister, LogCheck, GetAll} from '../../util/ApiFunc'
import seatHandling from '../../util/seatHandling';

// some const
const ShinGuan = 0, Lishin = 1;
const rent = 0, ret = 1, search = 2;
const login = 0, wheretosit = 1, selecting = 2;

const Login = ({register, person, setPerson, setSelectState, forgetOnClick, setSeatLiShin, setSeatShinGuan}) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const accountChange = (e) => {
        setAccount(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const submitOnClick = async () => {
        setPerson({account: account, password: password});
        
        let people = await GetAll();
        let loginReturn;
        if(register === rent) loginReturn = await AcntRegister(account, password);
        else loginReturn = await LogCheck(account, password);

        console.log(person);
        let SeatLiShin, SeatShinGuan;
        SeatLiShin = seatHandling(register, people, {account: account, password: password}, Lishin);  
        SeatShinGuan = seatHandling(register, people, {account: account, password: password}, ShinGuan);

        console.log(SeatLiShin);

        setSeatLiShin(SeatLiShin);
        setSeatShinGuan(SeatShinGuan);
        
        setAccount('');
        setPassword('');
        if(loginReturn.valid === false) console.log(loginReturn.message);
        else                            setSelectState(wheretosit);
    }

    return(
        <ThemeProvider theme={createTheme()}>
            {/* <button onClick={submitOnClick}></button> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} >
        <CssBaseline />
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign In
                </Typography>
                <Box sx={{ mt: 1 }}>
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="account"
                    label="account"
                    name="account"
                    autoComplete="account"
                    autoFocus
                    value={account}
                    onChange={accountChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={passwordChange}
                />
                <Box display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color='primary'
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!account || !password}
                    onClick={submitOnClick}
                >
                    Sign In
                </Button>
                {/* <button className='BTN' onClick={submitOnClick} style={{
                        backgroundColor: '#008CBA',
                        border: 'none',
                        color: 'white',
                        // padding: '15px 32px',
                        display: 'flex',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '20px',
                        }}>
                    Sign In
                </button> */}
                <Grid container sx={{ mt: 3, mb: 2 }}>
                    <Grid item xs>
                    <Link onClick={forgetOnClick} style={{fontSize: '5px'}}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{fontSize: '5px'}}>
                        {"terms of use"}
                    </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </Grid>
        </ThemeProvider>
    )
}
export default Login;