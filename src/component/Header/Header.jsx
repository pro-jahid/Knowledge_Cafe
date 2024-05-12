import { useEffect } from "react";
import { useState } from "react";
import Product from "../../Product/Product";




const Header = () => {
    const [carts, setCarts] =useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data =>setCarts(data))
    },[])
    return (
        <div className="container mx-auto">
           <div className="py-12 text-5xl font-bold"><h1>Knowledge Cafe</h1></div> 
           {
            carts.map(cart => <Product carts={cart} key={cart.id}></Product>)
           }
        </div>
    );
};

export default Header;