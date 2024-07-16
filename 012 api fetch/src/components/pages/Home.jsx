import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../common-components/Header';
import ProductCard from '../common-components/ProductCard';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(2);

    const getData = async () => {
        const response = await axios.get(`https://dummyjson.com/products?limit=12&skip=${(page-1)*12}`);



        if (response.status !== 200) return alert('something went wrong');

        setData(response.data.products);
        console.log((response.data.products))
    }

    useEffect(() => {
        getData()
    }, []);

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <>
            <Header />
            <div className='product-container'>
                <div className='product-filter'></div>
                <div className='products'>
                    {
                        data.map((product, index)=>(
                            <ProductCard key={index} modalOpen={onOpenModal} data={product}/>
                        ))
                    }
                </div>
            </div>
            <div>
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
        </>
    )
}

export default Home