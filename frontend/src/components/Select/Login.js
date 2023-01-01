import './Login.css';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

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

    return (
        <div className='Login'>
            {/* two text and one submit button */}
            <input
                type='text'
                className='inputAccount'
                placeholder='please enter your account.'
                value={account}
                onChange={accountChange}
            />
            <input
                type='text'
                className='inputPassword'
                placeholder='please enter your password.'
                value={password}
                onChange={passwordChange}
            />
            <div className='inputCheck'>
                <Button
                type='button'
                disabled={!account || !password}
                onClick={submitOnClick}
                >Login</Button>
            </div>
        </div>
    )
}
export default Login;