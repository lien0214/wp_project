
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
        <Box sx={{my: 2, mx: 2,
                  display: 'flex',
                  alignItems: 'center',
                  opacity: "100%",}}
            style={{fontSize: '2vh', color: 'black'}}
              >
              <Avatar sx={{ m: 2, mr: 1, bgcolor: '#f0e935', height: "4vh", width: "4vh"}}>
                <EggIcon sx={{height: "3vh", width: "3vh"}}/>
              </Avatar>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="body2">
                . .
              </Link>
        </Box>
        
      </Grid>
    </Container>
  );
}

export default App;
