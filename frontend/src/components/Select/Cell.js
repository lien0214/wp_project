import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';
import { palette } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChairIcon from '@mui/icons-material/Chair';
import {QryEmpty} from '../../util/ApiFunc'

const theme = createTheme({
    palette: {
      primary: {
        main: '#1fbcf0',
      },
    },
  });


const Cell = ({where, cellInfo, coverOnClick }) => {
    const Qry = async () => {
        // const ret = await QryEmpty(where, cellInfo.id);
        const ret = true;
        console.log(ret, cellInfo.id);
        if(ret < 0)
            return false;
        else return true;
    }
    // const clr = QryPos();
    // const clr = "#72ed76";

    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        { (where === 0) && <Grid>
            {((cellInfo.id % 8 === 1) || (cellInfo.id % 8 === 3) || (cellInfo.id % 8 === 7)) &&
                <Button onClick={(cellInfo) => coverOnClick(cellInfo.person) }
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginLeft: '2vh',
                        borderRadius: '5%',
                    }}
                >
                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    <ChairIcon />
                    {cellInfo.id}
                    </Box>
                </Button>
            }
            {((cellInfo.id % 8 === 2) || (cellInfo.id % 8 === 6) || (cellInfo.id % 8 === 0)) &&
                <Button onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginRight: '2vh',
                        borderRadius: '5%',
                    }}
                >
                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    <ChairIcon />
                    {cellInfo.id}
                    </Box>
                </Button>
            }
            {((cellInfo.id % 8 === 4) || (cellInfo.id % 8 === 5)) &&
                <Button onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        borderRadius: '5%',
                    }}
                >
                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    <ChairIcon />
                    {cellInfo.id}
                    </Box>
                </Button>
            }
        </Grid>
        }

        { (where === 1) && <Grid>
            {((cellInfo.c === 10)) && 
                <Button onClick={(cellInfo) => coverOnClick(cellInfo.person) }
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginLeft: '4vh',
                        borderRadius: '5%',
                    }}
                >
                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    <ChairIcon />
                    {cellInfo.id}
                    </Box>
                </Button>
            }
            {(((cellInfo.c === 9 || cellInfo.c === 19)) ||
            (cellInfo.c === 15 && cellInfo.r === 4)) &&
                <Button onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginRight: '4vh',
                        borderRadius: '5%',
                    }}
                >
                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    <ChairIcon />
                    {cellInfo.id}
                    </Box>
                </Button>
            }
            {((cellInfo.c % 20 !== 10) && (cellInfo.c % 10 !== 9)) && (cellInfo.id != 96) &&
                <Button onClick={(cellInfo) => coverOnClick(cellInfo.person)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        borderRadius: '5%',
                    }}
                >
                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    <ChairIcon />
                    {cellInfo.id}
                    </Box>
                </Button>
            }
            
        </Grid>
        }
        </ThemeProvider>
    )
}
export default Cell;