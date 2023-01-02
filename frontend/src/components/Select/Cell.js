import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';
import { palette } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChairIcon from '@mui/icons-material/Chair';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1fbcf0',
      },
    },
  });



const Cell = ({cellInfo, coverOnClick }) => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            {((cellInfo.id % 8 === 1) || (cellInfo.id % 8 === 3) || (cellInfo.id % 8 === 7)) &&
                <Box onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                sx={{
                    // position: 'absolute',
                    bgcolor: '#9fa19f',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10%',
                    ml: 2,
                    mr: 1,
                    height: '10vh',
                    width: '10vh' 
                }}
                >
                    <ChairIcon />
                    {cellInfo.id}
                </Box>
            }
            {((cellInfo.id % 8 === 2) || (cellInfo.id % 8 === 6) || (cellInfo.id % 8 === 0)) &&
                <Box onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                sx={{
                    // position: 'absolute',
                    bgcolor: '#9fa19f',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10%',
                    ml: 1,
                    mr: 2,
                    height: '10vh',
                    width: '10vh' 
                }}
                >
                    <ChairIcon />
                    {cellInfo.id}
                </Box>
            }
            {((cellInfo.id % 8 === 4) || (cellInfo.id % 8 === 5)) &&
                <Box onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                sx={{
                    // position: 'absolute',
                    bgcolor: '#9fa19f',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10%',
                    ml: 1,
                    mr: 1,
                    height: '10vh',
                    width: '10vh' 
                }}
                >
                    <ChairIcon />
                    {cellInfo.id}
                </Box>
            }
        
        </ThemeProvider>
    )
}
export default Cell;