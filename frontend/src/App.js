import './App.css';
import SeatSelect from './containers/SeatSelect'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChairIcon from '@mui/icons-material/Chair';
import Avatar from '@mui/material/Avatar';
import EggIcon from '@mui/icons-material/Egg';
import Link from '@mui/material/Link';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Grid container component="main" item
            xs={false}
            sx={{height: "10vh",
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            }}
          >
        <Box sx={{my: 1, mx: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',}}
            style={{fontSize: '4vh', color: 'black'}}
              >CSIE
              <Avatar sx={{ m: 2, ml: 1, bgcolor: '#e79fc3', height: "4vh", width: "4vh"}}>
                <ChairIcon sx={{height: "3vh", width: "3vh"}}/>
              </Avatar>
        </Box>
      </Grid>

      <SeatSelect/>

      <Grid container component="main" item
            xs={false}
            sx={{height: "10vh",
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            flexDirection: 'row-reverse',
            }}
          >
        <Box sx={{my: 1, mx: 2,
                  display: 'flex',
                  alignItems: 'center',}}
            style={{fontSize: '2vh', color: 'black'}}
              >
              <Avatar sx={{ m: 2, mr: 1, bgcolor: '#f0e935', height: "4vh", width: "4vh"}}>
                <EggIcon sx={{height: "3vh", width: "3vh"}}/>
              </Avatar>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="body2">
                ._.
              </Link>
        </Box>
        
      </Grid>
    </div>
  );
}

export default App;
