import './Login.css';
import React, { useState } from 'react';


const Login = (setPerson) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const setPersonOnClick = () => {
        setPerson(function(prevData){    
            console.log("prevData: " + prevData.length)
            
            return {account: account, password: password}
        })
    }

    const accountChange = (e) => {
        setAccount(e.target.value)
        // console.log('account: ' + account);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
        // console.log('password: ' + password);
    }

    return (
        <div className='Login'>
            <input type='text' className='inputAccount' placeholder='please enter your account.' value={account} onChange={accountChange}></input>
            <input type='text' className='inputPassword' placeholder='please enter your password.' value={password} onChange={passwordChange}></input>
            <button type='button' className='inputCheck' onClick={setPersonOnClick}>Login</button>
            {/* two text and one submit button */}
        </div>
    )
}
export default Login;