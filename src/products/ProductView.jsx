import React, { useState, useEffect } from "react";
import { Table, Button} from "reactstrap";
import MyPageCards from "./MyPageCards";
import APIURL from '../helpers/environment';

const ProductView = (props) => {
  const deleteProduct = (product) => {
    fetch(`${APIURL}/product/delete/${product.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => {
      props.getListOfProducts();
    });
  };

  function changeBtn(e) {
    // e.target.style.fontSize = 'larger';
    e.target.style.color = '#f7e1d7';
    e.target.style.fontWeight = 'bold';
  }

  function resetBtn(e) {
    // e.target.style.fontSize = 'initial';
    // e.target.style.fontStyle = 'initial';
    e.target.style.fontWeight = 'initial';
    e.target.style.color = 'white';
  }

  const productListMapper = () => {
    return props.productList.map((product, index) => {
      return (
        <>
        <tr key={index} >
          <td > 
            <MyPageCards productItem={product} />
            <div class="flexbox-container">
                <div class="flexbox-item-1">
                  <Button
                    style={{ backgroundColor: "#b0c4b1", marginRight: 5, width: 100 }}
                    onMouseOver={changeBtn} onMouseLeave={resetBtn}
                    onClick={() => {
                      props.editUpdateProduct(product);
                      props.updateOn();
                    }}
                  >
                    Edit
                  </Button>{" "}
                </div>
                <div class="flexbox-item-2">
                  <Button
                    style={{ backgroundColor: "#4a5759", marginLeft: 5, width: 100}}
                    onMouseOver={changeBtn} onMouseLeave={resetBtn}
                    onClick={() => {
                      deleteProduct(product);
                    }}
                  >
                    Delete
                  </Button>
                </div>
            </div>
          </td>
        </tr>
        </>
      );
    });
  };

  return (
    <>
      <h3 id="myShopHeader">my shop</h3>
      <br />
      <Table>
        <tbody>
          {props.productList.length === 0 ? (
            <h4>
              You have no product for sale yet.. Use the bar on the left to list
              some
            </h4>
          ) : (
            productListMapper()
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ProductView;
