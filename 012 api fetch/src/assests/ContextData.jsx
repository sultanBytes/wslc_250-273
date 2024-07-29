import React, { createContext, useCallback, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export const myContext = createContext();

const DataGlobal = ({children}) => {

    const [cart, setCart] = useState([]);

//    const getCartData = useCallback(()=>{
//     let cartData = Cookies.get('api-cart');

//         if(cartData === undefined){
//             cartData = [];
//         }else{
//             cartData = JSON.parse(cartData)
//         }
    
//         setCart(cartData);
//    });

//     useEffect(()=>{
//         getCartData();
//     },[]);
    
  return (
    <myContext.Provider value={{cart, setCart}}>
        {children}
    </myContext.Provider>
  )
}

export default DataGlobal