import { useEffect, useState } from "react";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Row, Col, CardHeader} from 'reactstrap';






const MyPageCards = (props) => {

  //used in case no picture set in the card 
  function errorHandling(ev){
    ev.target.src =  'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg';
  }

  return ( 
    <div>
      <Card className="myShopCard " style={{width: 810,  height: 255, backgroundColor: "#f5f5f5"}}>
        <CardBody id="container-MyPageCards" >
          <div className="img1">
          <CardImg src={props.productItem.photoURL} alt="card image" style={{width: 286, height: 255, padding: 10, borderRadius: 10}} onError = {errorHandling} /> 
          </div>
          <div className="description" style={{padding: 15}}>
          <CardTitle style={{fontSize: 25}} tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
            </CardText>
          <div style={{ borderRadius: 5, display: "block"}}>
          <CardText tag="h6">{props.productItem.description}</CardText>
          </div>
          </div>
        </CardBody>
      </Card>

      </div>
    );
  };
 
export default MyPageCards;
