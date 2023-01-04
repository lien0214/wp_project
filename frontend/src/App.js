
import SeatSelect from './containers/SeatSelect'
import Header from './components/Header'
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


const theme = createTheme();

const Container = styled.div`
  background-image: url('https://i.imgur.com/5NUUrFE.png');
`

function Copyright(props) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      my: 2, mx: 2,
      opacity: "100%",
      }}>
      <Typography 
        variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.youtube.com/watch?v=6omHDfHITZ4">
          NTU CSIE系學會的朋友的朋友
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
      <Avatar sx={{m: 1, bgcolor: '#f0e935', height: "3vh", width: "3vh"}}>
        <EggIcon sx={{height: "2vh", width: "2vh"}}/>
      </Avatar>
    </Box>
  );
}

function App() {
  return (
    <Container className="App">
      <CssBaseline />
      
      <Header/>

      <SeatSelect/>

      <Grid container component="main" item
            xs={false}
            sx={{height: "10vh",
            flexDirection: 'row-reverse',
            opacity: "80%",
            }}
          >
        <Copyright/>
      </Grid>
    </Container>
  );
}

export default App;
