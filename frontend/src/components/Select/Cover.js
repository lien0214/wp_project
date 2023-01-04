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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EggIcon from '@mui/icons-material/Egg';
import styled from 'styled-components'
import "./Cover.css"
import NumbersIcon from '@mui/icons-material/Numbers';
// transform: translate(-50%, -10%);

const Contaner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


const Cover = ({backToHomeOnClick, register, coverSeatId}) => {

    const setBackToHomeOnClick = () => {
        backToHomeOnClick();
    }
    
    console.log("test", coverSeatId)

    return (
        <div className='container'>
            <ThemeProvider theme={createTheme()}>
            <CssBaseline />
            {/* <Grid container component="main" sx={{ mt: '5vh', mb: '5vh', height: '70vh', width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',}}> */}
            <Grid item component={Paper} elevation={6} sx={{ 
                    height: '60vh', width: '100%',
                    backgroundImage: 'url(https://i.imgur.com/UZHsb0M.png)'
                    }}>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    
                    <Avatar sx={{ m: 1, mb: 2, bgcolor: 'error.main', height: "4vh", width: "4vh"}}>
                        <NumbersIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{mb: 1}}>
                    操作成功
                    </Typography>
                    
                    {register === 0 && <Typography component="h1" variant="h5" sx={{mb: 5}}>
                    已租借座位
                    </Typography>}
                    {register === 1 && <Typography component="h1" variant="h5" sx={{mb: 5}}>
                    已歸還座位
                    </Typography>}
                    <Box sx={{ mt: 1 }}>
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='primary'
                        sx={{ mt: 3, mb: 2 }}
                        style={{fontSize: '25px', color: 'white'}}
                        onClick={setBackToHomeOnClick}
                    >
                        回到首頁
                    </Button>
                    
                    </Box>
                </Box>
            </Grid>
            {/* </Grid> */}
            </ThemeProvider>
        </div>
    )
}
export default Cover;