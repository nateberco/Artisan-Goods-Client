import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import ProductCreate from './ProductCreate';
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';
import APIURL from '../helpers/environment';

const ProductIndex = (props) => {

    const [productList, setProductList] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [productToUpdate, setProductToUpdate] = useState({});

    const getListOfProducts = () => {
        fetch(`${APIURL}/product/owner`, {
            method: 'GET',
            headers:new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => res.json())
        .then((productList) => {
            setProductList(productList);
            console.log('list of product from index -->', productList);
        })
    }


    const editUpdateProduct = (product) => {
        setProductToUpdate(product);
        console.log(product);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }


    useEffect( () => {
        getListOfProducts();
    }, [])

    function whoIsConnected(){
        localStorage.getItem("email");
    }

    useEffect(() => {
        // localStorage.getItem("email");
        whoIsConnected()
    }, []);


    const clearToken = () => {
        localStorage.clear();
        props.setSessionToken('');
        props.setUserEmail('');
        console.log("Logged out");
    };


    return ( 
        <>
        <div className='text-right' >
                <Col style ={{padding: '70px'}} md='12'>
                    <hr color="#f7e1d7"/>
                    <h6 className='font-italic' style={{color: "#91a597"}}>{localStorage.getItem("email")} is connected</h6>
                    <Button size="sm" onClick={clearToken}>Log out</Button>
                    <hr color="f7e1d7"/>
                </Col>
        </div>
        <Container>
            <Row>
                <Col md="3" style={{backgroundColor: "#F7E1D7", width: "400px",  height: 800, padding: 15, borderRadius: 15}}>
                
                    <ProductCreate getListOfProducts={getListOfProducts} token={props.token}/>
                   
                </Col>
                <Col md="9" className='text-center'>
                    <ProductView getListOfProducts={getListOfProducts} productList={productList} editUpdateProduct={editUpdateProduct} updateOn={updateOn} token={props.token}/>
                </Col>
                <Col>
                {updateActive ? <ProductEdit productToUpdate={productToUpdate} updateOff={updateOff} token={props.token} getListOfProducts={getListOfProducts}/> : <></>}
                </Col>
            </Row>
            <br/>
        </Container>
        </>
     );
}
 
export default ProductIndex;