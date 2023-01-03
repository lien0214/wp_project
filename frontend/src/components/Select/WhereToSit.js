// import './WhereToSit.css';
// import Button from '@material-ui/core/Button';
// import React from 'react';

// const login = 0, wheretosit = 1, selecting = 2;
// const ShinGuan = 0, Lishin = 1;
// const WhereToSit = ({person, setPerson, setState}) => {
//     const LiShinOnClick = () => {
//         // console.log("LiShinOnClick")
//         setPerson({
//             account: person.account,
//             password: person.password,
//             wheretosit: Lishin
//         });
//         setState(selecting);
//         // console.log("wheretosit person: " + person)
//     }
//     const ShinGuanOnClick = () => {
//         // console.log("ShinGuanOnClick")
//         setPerson({
//             account: person.account,
//             password: person.password,
//             wheretosit: ShinGuan
//         });
//         setState(selecting);
//     }
//     return (
//         <div className='WhereToSit'>
//             {/* two photo and two button choosing outside or inside to sit */}
//             <div className='Lishin'>
//                 <Button color='primary' variant="contained" style={{fontSize: '25px', color: 'white'}} onClick={LiShinOnClick}>裡新</Button>
//             </div>
//             <div className='ShinGuan'>
//                 <Button color='secondary' variant="contained" style={{fontSize: '25px', color: 'white'}} onClick={ShinGuanOnClick}>新館</Button>
//             </div>
//         </div>
//     )
// }

// export default WhereToSit;




import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { sizing } from '@mui/system';
import Grid from '@mui/material/Grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1fbcf0',
      },
    },
  });
const WhereToSit = ({person, setPerson, setSelectState}) => {
  
    const login = 0, wheretosit = 1, selecting = 2;
    const ShinGuan = 0, Lishin = 1;

    const LiShinOnClick = () => {
        // console.log("LiShinOnClick")
        setPerson({
            account: person.account,
            password: person.password,
            wheretosit: Lishin
        });
        console.log(person)
        setSelectState(selecting);
    }
    const ShinGuanOnClick = () => {
        setPerson({
            account: person.account,
            password: person.password,
            wheretosit: ShinGuan
        });
        setSelectState(selecting);
    }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '80vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage: 'url(https://i.imgur.com/5oobnjj.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            justifyContent="center"
          >
            <Avatar sx={{ mt: 1, bgcolor: 'error.main' }}>
              <ThumbUpIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{mb: 4}}>
              請選擇地點
            </Typography>
            <Box sx={{ m: 3, width: "90%"}}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    margin="normal"
                    color="primary"
                    sx={{ mt: 3, mb: 2}}
                    style={{fontSize: '25px', color: 'white'}}
                    onClick={LiShinOnClick}
                >
                    裡新
                </Button>
            </Box>
            <Box sx={{ m: 3, width: "90%"}}>
                <Button
                    type="submit"
                    margin="normal"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    color="primary"
                    style={{fontSize: '25px', color: 'white'}}
                    onClick={ShinGuanOnClick}
                >
                    新館
                </Button>
            </Box>
            
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default WhereToSit