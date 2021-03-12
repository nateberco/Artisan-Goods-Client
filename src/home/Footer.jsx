import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import {Row, Container} from "reactstrap";

const Footer = () => {

    // const theDate = new Date().getFullYear();
    const theDate = '2021';

    return (
        <>
       
        {/* <br/>
        <br/> */}
        <div className="footerContainer" style={{position: "relative"}}>

        <div className="footer" style={{backgroundColor: '#b0c4b1', height: "290px", width: "auto", position: "relative"}}>
        
        <h1 id="socialMediaFooter">Like what you see? Follow Us!</h1>
        
        <div class="social-container">
           
                <a href="https://www.youtube.com"
                 className="youtube social" target="blank">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com"
                  className="facebook social" target="blank">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="twitter social" target="blank">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com"
                  className="instagram social" target="blank">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

        </div>

       
     </div>
        <div style={{backgroundColor: '#b0c4b1', position: "relative",  marginBottom: "0%"}}className='footer-copyright text-center ml-auto py-3'>  
            &copy; {theDate} - Inception Team - Blue Badge      
        </div>
        </div>
        
      </>
    );
};

export default Footer;