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

const Restart = ({backToHomeOnClick}) => {
    return (
        <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Grid container component="main" sx={{ mt: '5vh', mb: '5vh', height: '70vh', width: '100%' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage: 'url(https://i.imgur.com/jNZbJ76.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} >
        
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                
                <Avatar sx={{ m: 1, bgcolor: '#f0e935', height: "4vh", width: "4vh"}}>
                    <EggIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{mb: 5}}>
                操作成功
                </Typography>
                <Box sx={{ mt: 1 }}>
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color='primary'
                    sx={{ mt: 3, mb: 2 }}
                    onClick={backToHomeOnClick}
                    style={{fontSize: '25px', color: 'white'}}
                >
                    回到首頁
                </Button>
                
                </Box>
            </Box>
        </Grid>
        </Grid>
        </ThemeProvider>
    )
}
export default Restart;