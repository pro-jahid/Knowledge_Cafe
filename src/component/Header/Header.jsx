import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
    const [cart, setCart] =useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data =>setCart(data))
    },[])
    return (
        <div>
           <div><h1>Knowledge Cafe</h1></div> 
           {
            cart.map(carts =>console.log(carts))
           }
        </div>
    );
};

export default Header;