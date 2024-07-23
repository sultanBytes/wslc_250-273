import React from 'react'


const Card = ({data, functionToOpenModal}) => {
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
            }}>Add to cart</button>
        </div>
    </div>
  )
}

export default Card