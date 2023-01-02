import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

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



const Cell = ({where, cellInfo, coverOnClick }) => {
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        { (where === 0) && <Grid>
            {((cellInfo.id % 8 === 1) || (cellInfo.id % 8 === 3) || (cellInfo.id % 8 === 7)) &&
                <Box onClick={(cellInfo) => coverOnClick(cellInfo.person) }
                sx={{
                    // position: 'absolute',
                    bgcolor: '#72ed76',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5%',
                    ml: 2,
                    mr: 1,
                    height: '10vh',
                    width: '10vh',
                    overflow: 'auto'
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
                    bgcolor: '#72ed76',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5%',
                    ml: 1,
                    mr: 2,
                    height: '10vh',
                    width: '10vh',
                    overflow: 'auto'
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
                    bgcolor: '#72ed76',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5%',
                    ml: 1,
                    mr: 1,
                    height: '10vh',
                    width: '10vh',
                    overflow: 'auto'
                }}
                >
                    <ChairIcon />
                    {cellInfo.id}
                </Box>
            }
        </Grid>
        }

        { (where === 1) && <Grid>
            {((cellInfo.c === 10)) && 
                <Box onClick={(cellInfo) => coverOnClick(cellInfo.person) }
                sx={{
                    // position: 'absolute',
                    bgcolor: '#72ed76',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5%',
                    ml: 5,
                    mr: 1,
                    height: '10vh',
                    width: '10vh',
                    overflow: 'auto'
                }}
                
                >
                    <ChairIcon />
                    {cellInfo.id}
                </Box>
            }
            {(((cellInfo.c === 9 || cellInfo.c === 19)) ||
            (cellInfo.c === 15 && cellInfo.r === 4)) &&
                <Box onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                sx={{
                    // position: 'absolute',
                    bgcolor: '#72ed76',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5%',
                    ml: 1,
                    mr: 5,
                    height: '10vh',
                    width: '10vh',
                    overflow: 'auto'
                }}
                >
                    <ChairIcon />
                    {cellInfo.id}
                </Box>
            }
            {((cellInfo.c % 20 !== 10) && (cellInfo.c % 10 !== 9)) && (cellInfo.id != 96) &&
                <Box onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                sx={{
                    // position: 'absolute',
                    bgcolor: '#72ed76',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5%',
                    ml: 1,
                    mr: 1,
                    height: '10vh',
                    width: '10vh',
                    overflow: 'auto'
                }}
                >
                    <ChairIcon />
                    {cellInfo.id}
                </Box>
            }
            
        </Grid>
        }
        </ThemeProvider>
    )
}
export default Cell;