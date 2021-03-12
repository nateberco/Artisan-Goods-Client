import React from 'react';
import logo from '../assets/AG-LOGO.gif';

const Logo = () => {
    return ( 
        <div className='d-flex justify-content-center' style={{height: 240, padding: 30}}>
        <a  className="logo text-decoration-none" >
            <img 
              src={logo}
              // style={ {paddingTop: "35px"}}
              alt=""
              width="100"
              height="100"
            />
            <h1 style={{color: "black",   fontFamily: '"Satisfy", cursive', fontSize: "70px", wordSpacing: 17,  fontStyle: "italic", 
 }}>Artisan Goods</h1>
          </a>
        
          </div>

     );
}
 
export default Logo;