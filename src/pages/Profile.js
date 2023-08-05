import {useEffect} from 'react';

function Profile(){
    useEffect(()=>{
        const intervel = setInterval(()=>{
            console.log('setIntervel');
        },1000);
        return ()=>{
            clearInterval(intervel)
        }
    },[])
    return (
        <h1>Profile ....!</h1>
    )
}

export default Profile;