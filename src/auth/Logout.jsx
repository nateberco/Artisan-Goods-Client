import React, { useEffect } from 'react';
import Auth from '../auth/Auth';


const LogOut = (props) => {

    const clearToken = () => {
        localStorage.clear();
        props.setSessionToken('');
        props.setUserEmail('');
        console.log("Logged out");
    };

    useEffect(() => {
        clearToken()
    }, []);

    

    return ( 
        <>
        <Auth updateToken={props.updateToken} updateEmail={props.updateEmail}/>
        </>

     );
}
 
export default LogOut;