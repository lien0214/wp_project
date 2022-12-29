import './Login.css';
import React from 'react';

const Login = (setPerson) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const setPersonOnClick = () => {
        setPerson({account: account, password: password});
    }

    return (
        <div className='Login'>
            {/* two text and one submit button */}
        </div>
    )
}
export default Login;