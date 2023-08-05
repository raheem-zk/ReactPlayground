import { useState } from 'react';

function LoginPage(){
    const [userName, setUserName ]=useState('klkl');
    const [password, setPassword ]=useState('kjjkl');
    const data ={ username:'user', password:'password'};
    return(
        <div>
        <form action="">
            <input type="text" value={userName} />
            <input type="password" value={password} />
            <button> Submit</button>
        </form>
        </div> 
    )
}

export default LoginPage;