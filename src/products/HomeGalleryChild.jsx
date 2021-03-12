import { useEffect, useState } from "react";
import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Row, Col,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const HomeGalleryChild = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  // to display the close button on Modal form
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //used in case no picture set in the card 
  function errorHandling(ev){
    ev.target.src = 'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg';
  }

  function changeBtn(e) {
    e.target.style.fontSize = 'larger';
  }

  function resetBtn(e) {
    e.target.style.fontSize = 'initial';
  }


    return ( 
     
      <div className="Cards">
      <Card className="CardCss" style={{textAlign: "center" , width: '350px', height: "450px", padding: "0px", marginBottom: 20, boxShadow: " lightGrey 2px 2px"}}>
        <CardImg src={props.productItem.photoURL} alt="Card image" width="350" height="270" onError = {errorHandling} />
        <CardBody className="CardBody" style = {{background: "white"}} >
          <CardTitle tag="h5" style={{fontSize: 17}}>{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
          </CardText>
          <Button style={{background: "#4A5759"}} onMouseOver={changeBtn} onMouseLeave={resetBtn} onClick={toggle}>{buttonLabel}See Full Description</Button> 
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader style={{backgroundColor: "#f7e1d7" , textAlign: "center", height: 90, borderRadius: 10}} toggle={toggle}>
          {props.productItem.name}
          {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
        </ModalHeader>
        <Row className="justify-content-center">
        <img src={props.productItem.photoURL} alt="Card image" width="370" height="310" style={{padding:20}} onError = {errorHandling}/>
        </Row>
        <ModalBody style={{textAlign: "center"}}>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>
            {props.productItem.description}{' '}
          </CardText>
        </ModalBody>
        <ModalFooter style={{backgroundColor: "#f7e1d7", marginLeft: 0, marginRight: 0}}>
          <Button style={{backgroundColor: "#4a5759", color: "white", width: 150, height: 40, textAlign: "center", marginLeft: "auto", marginRight: "auto"}} onMouseOver={changeBtn} onMouseLeave={resetBtn} onClick={toggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
     

        </div>

      );
    };

 
export default HomeGalleryChild;