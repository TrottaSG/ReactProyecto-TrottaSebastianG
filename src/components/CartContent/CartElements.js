import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";

import React from 'react';

const CartElements = () => {
    const { cart, setCart } = useContext(dataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter ((elemet) =>{
            return elemet !== foundId;
        });

        setCart(newCart);
    };
        return cart.map((product) => {
            return (
                <div className="cartContent" key={product.id}>
                    <img src={product.img} alt="product-card"/>
                    <h3 className="name">{product.name}</h3>
                    <CartItemCounter product={product} />
                    <h4 className="price">{product.price * product.quanty}$</h4>
                    <h3 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>❌</h3>
                </div>
            );
        });        
        
//    <form onSubmit={generateOrder}>
  //          <input type="text" name="name" onChange={handleOnChange} value={"dataForm.name"} placeholder="ingrese el nombre "/>
    //        <input type="text" name="phone" onChange={handleOnChange} value={"dataForm.phone"} placeholder="ingrese el celular"/>
      //      <input type="text" name="email" onChange={handleOnChange} value={"dataForm.email"} placeholder="ingrese el email"/>
        //    <button className="btn btn-outline-danger">generateOrder</button>
        //</form>
};

export default CartElements;
