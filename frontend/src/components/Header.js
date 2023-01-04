import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChairIcon from '@mui/icons-material/Chair';
import Avatar from '@mui/material/Avatar';
import EggIcon from '@mui/icons-material/Egg';
import Link from '@mui/material/Link';
import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const Header = () =>{

    return(
        <Grid container component="main" item
            xs={false}
            sx={{height: "10vh",
            opacity: "80%",
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            }}
          >
        <Box sx={{my: 1, mx: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  opacity: "100%",}}
            style={{fontSize: '4vh', color: 'black'}}
              >CSIE
              <Avatar sx={{ m: 1, ml: 1, bgcolor: '#e79fc3', height: "4vh", width: "4vh"}}>
                <ChairIcon sx={{height: "3vh", width: "3vh"}}/>
              </Avatar>
        </Box>
        
        {/* <Box component={Paper} style={{fontSize: '2vh', color: 'black'}} sx={{
                  my: 1, mx: 2,
                  width: '20vh',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  opacity: "100%",
                  justifyContent: 'center',
                  // backgroundColor: 'transparent',
                  backgroundImage: 'url(https://i.imgur.com/QivTRmO.png)',
                  borderRadius: '5%',}}>
            <Link href="https://www.csie.ntu.edu.tw/" underline="none" sx={{
                  my: 1, mx: 2,
                  color: 'black'}}>
                    關於台大資工
            </Link>
        </Box> */}
        {/* <Box component={Paper} style={{fontSize: '2vh', color: 'black'}} sx={{
                  width: '20vh',
                  my: 1, mx: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: "100%",
                  // backgroundColor: 'transparent',
                  backgroundImage: 'url(https://i.imgur.com/QivTRmO.png)',
                  borderRadius: '5%',}}>
            <Link underline="none" sx={{
                  my: 1, mx: 2,
                  color: 'black'}}>
                    回到首頁
            </Link>
        </Box> */}
      </Grid>
    )

}

export default Header;
