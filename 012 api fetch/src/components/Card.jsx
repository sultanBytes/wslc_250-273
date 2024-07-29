import React, { useContext } from 'react'
import { myContext } from '../assests/ContextData';


const Card = ({data, functionToOpenModal, toastFn}) => {
    const {cart, setCart} = useContext(myContext);

    // console.log(cart, setCart);

    const handleAddToCart = ()=>{
        const index = cart.findIndex((item)=> item.data.id === data.id);

        if(index === -1){
            setCart([...cart, {data, quantity:1}]);
        }else{
            cart[index].quantity = cart[index].quantity + 1;
            setCart([...cart]);
        }

        toastFn();
    };
  return (
    <div style={{
        boxShadow:'0 0 3px 1px lightgray',
        borderRadius:'8px'
    }}>
        <div>
            <img 
            src={data.thumbnail}
            style={{
                width:'100%',
                cursor:'pointer'
            }}
            onClick={functionToOpenModal}
            alt='img'
            />
        </div>
        <div>
            <h3 style={{
                textAlign:'center',
                color:'white'
            }}>{data.title}</h3>
            
        </div>
        <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'10px',
            padding:'10px'
        }}>
            <button style={{
                padding:'10px',
                background:'transparent',
                border:'1px solid black',
                borderRadius:'4px'
            }}>Price : {data.price}</button>
            <button  style={{
                padding:'10px',
                backgroundColor:'yellow',
                border:'1px solid black',
                borderRadius:'4px',
                cursor:'pointer'
            }}
            onClick={handleAddToCart}
            >Add to cart</button>
        </div>
    </div>
  )
}

export default Card