// import './Login.css';
// import Button from '@material-ui/core/Button';
// import React, { useState } from 'react';

// const login = 0, wheretosit = 1, selecting = 2;
// const Login = ({register, setPerson, setState}) => {
//     const [account, setAccount] = useState('');
//     const [password, setPassword] = useState('');

//     const accountChange = (e) => {
//         setAccount(e.target.value)
//     }
//     const passwordChange = (e) => {
//         setPassword(e.target.value)
//     }
//     const submitOnClick = () => {
//         setPerson({account: account, password: password});
//         setState(register ? wheretosit : selecting);
//     }

//     return (
//         <div className='Login'>
//             {/* two text and one submit button */}
//             <input
//                 type='text'
//                 className='inputAccount'
//                 placeholder='please enter your account.'
//                 value={account}
//                 onChange={accountChange}
//             />
//             <input
//                 type='text'
//                 className='inputPassword'
//                 placeholder='please enter your password.'
//                 value={password}
//                 onChange={passwordChange}
//             />
//             <div className='inputCheck'>
//                 <Button
//                 type='button'
//                 disabled={!account || !password}
//                 onClick={submitOnClick}
//                 >Login</Button>
//             </div>
//         </div>
//     )
// }
// export default Login;


import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const login = 0, wheretosit = 1, selecting = 2;
const Login = ({register, setPerson, setState}) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const accountChange = (e) => {
        setAccount(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const submitOnClick = () => {
        setPerson({account: account, password: password});
        setState(register ? wheretosit : selecting);
    }

    return(
        <ThemeProvider theme={createTheme()}>
        
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <CssBaseline />
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign In
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="account"
                    label="account"
                    name="account"
                    autoComplete="account"
                    autoFocus
                    value={account}
                    onChange={accountChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={passwordChange}
                />
                <Box display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!account || !password}
                    onClick={submitOnClick}
                >
                    Sign In
                </Button>
                <Grid container sx={{ mt: 3, mb: 2 }}>
                    <Grid item xs>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="body2"
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="body2">
                        {"terms of use"}
                    </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </Grid>
        </ThemeProvider>
    )
}
export default Login;