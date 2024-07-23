import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    // const [modalData, setModalData] = useState({});

  const onOpenModal = (index) => setOpen(true);
  const onCloseModal = () => setOpen(false);

    const getData = async()=>{
        axios.get('https://dummyjson.com/products?limit=194')
        .then((response)=>{
            if(response.status !== 200) return alert('something went wrong');

            console.log(response.data);
            setProducts(response.data.products)
        })
    };

    useEffect(()=>{getData()},[]);
  return (
    <>
    <div style={{
        display:'grid',
        gridTemplateColumns:'1fr 3fr',
        gap:'10px'
    }}>
        <div style={{
            backgroundColor:'yellow'
        }}></div>
        <div style={{
            backgroundColor:'red',
            display:'grid',
            gridTemplateColumns:'repeat(4, 1fr)',
            gap:'10px',
            padding:'10px'
        }}>
            {
                products.map((product, index)=>(
                    <Card key={index} data={product} functionToOpenModal={()=>{onOpenModal(index)}}/>
                ))
            }
        </div>
    </div>

    <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </>
  )
}

export default Home;