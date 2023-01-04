import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChairIcon from '@mui/icons-material/Chair';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1fbcf0',
      },
    },
  });



const Cell = ({where, cellInfo, coverOnClick, register}) => {
    console.log(cellInfo);
    const buttonOnClick = async (cellInfo) => {
        // const ret = await QryEmpty(1, cellInfo.id); // where == 0 for shinguan(bug?)
        // console.log(ret);
        // if(ret.pos < 0)
        //     coverOnClick(cellInfo);
        // else {
        //     //TODO: show info of the rent seat
        //     console.log(ret.whr);
        // }
        coverOnClick(cellInfo);
    }
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        {cellInfo.ifPersonSeat === false && 
        (where === 1) && <Grid>
            {((cellInfo.id % 8 === 0) || (cellInfo.id % 8 === 2) || (cellInfo.id % 8 === 6)) &&
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginLeft: '2vh',
                        borderRadius: '5%',
                    }}
                disabled={cellInfo.registered}
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
            {((cellInfo.id % 8 === 1) || (cellInfo.id % 8 === 5) || (cellInfo.id % 8 === 7)) &&
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginRight: '2vh',
                        borderRadius: '5%',
                    }}
                disabled={cellInfo.registered}
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
            {((cellInfo.id % 8 === 3) || (cellInfo.id % 8 === 4)) &&
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        borderRadius: '5%',
                    }}
                disabled={cellInfo.registered}
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

        {cellInfo.ifPersonSeat === false && 
        (where === 0) && <Grid>
            {((cellInfo.c === 10)) && 
                <Button onClick={() => buttonOnClick(cellInfo) }
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginLeft: '4vh',
                        borderRadius: '5%',
                    }}
                disabled={cellInfo.registered}
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
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        marginRight: '4vh',
                        borderRadius: '5%',
                    }}
                disabled={cellInfo.registered}
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
            {((cellInfo.c % 20 !== 10) && (cellInfo.c % 10 !== 9)) && (cellInfo.id != 95) &&
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#72ed76",
                        margin: '0.5vh',
                        borderRadius: '5%',
                    }}
                disabled={cellInfo.registered}
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
        













        {cellInfo.ifPersonSeat === true && 
        (where === 1) && <Grid>
            {((cellInfo.id % 8 === 0) || (cellInfo.id % 8 === 2) || (cellInfo.id % 8 === 6)) &&
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#6d6e6d",
                        margin: '0.5vh',
                        marginLeft: '2vh',
                        borderRadius: '5%',
                    }}
                    disabled={cellInfo.registered}
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
            {((cellInfo.id % 8 === 1) || (cellInfo.id % 8 === 5) || (cellInfo.id % 8 === 7)) &&
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#6d6e6d",
                        margin: '0.5vh',
                        marginRight: '2vh',
                        borderRadius: '5%',
                    }}
                    disabled={cellInfo.registered}
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
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#6d6e6d",
                        margin: '0.5vh',
                        borderRadius: '5%',
                    }}
                    disabled={cellInfo.registered}
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

        {cellInfo.ifPersonSeat === true && 
        (where === 0) && <Grid>
            {((cellInfo.c === 10)) && 
                <Button onClick={() => buttonOnClick(cellInfo) }
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#6d6e6d",
                        margin: '0.5vh',
                        marginLeft: '4vh',
                        borderRadius: '5%',
                    }}
                    disabled={cellInfo.registered}
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
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#6d6e6d",
                        margin: '0.5vh',
                        marginRight: '4vh',
                        borderRadius: '5%',
                    }}
                    disabled={cellInfo.registered}
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
            {((cellInfo.c % 20 !== 10) && (cellInfo.c % 10 !== 9)) && (cellInfo.id != 95) &&
                <Button onClick={() => buttonOnClick(cellInfo)}
                style={{maxWidth: '10vh',
                        maxHeight: '10vh',
                        minWidth: '10vh',
                        minHeight: '10vh',
                        backgroundColor: "#6d6e6d",
                        margin: '0.5vh',
                        borderRadius: '5%',
                    }}
                    disabled={cellInfo.registered}
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