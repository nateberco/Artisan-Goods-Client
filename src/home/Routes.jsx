import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from '../auth/Auth';
import SiteBar from "./Navbar";
import Logo from "./Logo";
import ProductIndex from '../products/ProductIndex';
import HomeGalleryParent from '../products/HomeGalleryParent';

const Routes = (props) => {

    const [userEmail, setUserEmail] = useState('');
    const [sessionToken, setSessionToken] = useState("");

    useEffect(() => {
        if (localStorage.getItem("token")) {
        setSessionToken(localStorage.getItem("token"));
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("email")) {
            setUserEmail(localStorage.getItem("email"));
        }
    }, [userEmail]);

    const updateToken = (newToken) => {
        localStorage.setItem("token", newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
    };

    const updateEmail = (newEmail) => {
        localStorage.setItem("email", newEmail);
        setUserEmail(newEmail);
        console.log(userEmail);
    };

    

    const protectedViews = () => {
        return (
          sessionToken === localStorage.getItem('token') ? <ProductIndex token={sessionToken} email={userEmail} setSessionToken={setSessionToken} updateToken={updateToken} setUserEmail={setUserEmail} updateEmail={updateEmail} /> : <Auth updateToken={updateToken} updateEmail={updateEmail}/>
        )
    }

    return ( 
        <>
        <SiteBar/>
        <Logo />
        <Switch>
            <Route exact path="/">
                <HomeGalleryParent />
            </Route>
            <Route exact path="/myShop">
                {protectedViews()}
            </Route>
        </Switch>
        </>
     )
}
 
export default Routes;
