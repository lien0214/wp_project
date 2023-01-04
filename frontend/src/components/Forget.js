import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const Forget = ({backToHomeOnClick}) => {

    const setBackToHomeOnClick = () => {
        backToHomeOnClick();
    }
    

    return (
        <ThemeProvider theme={createTheme()}>
            <CssBaseline />
            {/* <Grid container component="main" sx={{ mt: '5vh', mb: '5vh', height: '70vh', width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',}}> */}
            <Grid item sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    height: '80vh',
                    width: '100%',
                    backgroundColor: 'transparent',
                    // backgroundImage: 'url(https://i.imgur.com/UZHsb0M.png)'
                    }}>
                <Box component={Paper}
                    sx={{
                    width: '60%',
                    // height: '100%',
                    my: 4,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(https://i.imgur.com/UZHsb0M.png)'
                    }}
                >
                    <Box>
                        <Typography component="h1" variant="h5" sx={{mx: 3, mt: 4}}>
                        不是啊同學，這是你設的密碼，如果連你自己都不知道了，我們又怎麼可能會知道
                        </Typography>
                        <Typography component="h1" variant="h5" sx={{mx: 3, mt: 2}}>
                        沒可能我們把你的帳密存一份在我們Local端吧，我們又不是大科技公司哪有時間和精力偷你個資
                        </Typography>
                        <Typography component="h1" variant="h5" sx={{mx: 3, mt: 2}}>
                        但好在我們還是很善解人意的，我們提供以下兩種解決方法
                        </Typography>
                        <Typography component="h1" variant="h5" sx={{mx: 3, mt: 2}}>
                        男生的話就自己想辦法
                        </Typography>
                        <Typography component="h1" variant="h5" sx={{mx: 3, mt: 2}}>
                        女生的話請私訊組長ig：lien_yiwei214，我們會有專人為您服務
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40%',
                    }}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='primary'
                        sx={{ mt: 3, mb: 2 }}
                        style={{fontSize: '25px', color: 'white'}}
                        onClick={setBackToHomeOnClick}
                    >
                        回到首頁
                    </Button>
                    </Box>
                    <Box sx={{ mt: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40%',
                    }}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='primary'
                        sx={{ mt: 3, mb: 2 }}
                        style={{fontSize: '25px', color: 'white'}}
                        href="https://www.instagram.com/lien_yiwei214/"
                    >
                        IG
                    </Button>
                    
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider>
    )
}

export default Forget;
