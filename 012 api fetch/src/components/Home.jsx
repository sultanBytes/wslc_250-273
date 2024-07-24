import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [allCats, setCats] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');

    const onOpenModal = (index) => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const getData = async () => {
        let url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;

        if(activeCategory !== 'all') url = `https://dummyjson.com/products/category/${activeCategory}?limit=12&skip=${(currentPage - 1) * 12}`;

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) return alert('something went wrong');

                setTotalPages(Math.ceil(response.data.total / 12));
                setProducts(response.data.products)
            })
    };


    useEffect(() => { getData() }, [currentPage, activeCategory]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((response) => {
                if (response.status !== 200) return alert('something went wrong');
                console.log(response.data);
                setCats(response.data);
            })
    }, []);
    return (
        <>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 3fr',
                gap: '10px'
            }}>
                <div style={{
                    backgroundColor: 'yellow',
                    padding: '30px'
                }}>
                    <div>
                        <h3 style={{
                            lineHeight: '16px'
                        }}>Category</h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: '0'
                        }}>
                            <li key={-1}
                                onClick={()=>{setActiveCategory('all'); setCurrentPage(1)}}
                                style={{
                                    padding: '6px',
                                    margin: '2px 0',
                                    backgroundColor: (activeCategory === 'all') ? 'white' : 'olive',
                                    color: (activeCategory === 'all') ? 'olive' : 'white',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }}>All</li>
                            {
                                allCats.map((category, index) => (
                                    <li key={index}
                                        onClick={()=>{setActiveCategory(category.slug); setCurrentPage(1)}}
                                        style={{
                                            padding: '6px',
                                            margin: '2px 0',
                                            backgroundColor: (activeCategory === category.slug) ? 'white' : 'olive',
                                            color: (activeCategory === category.slug) ? 'olive' : 'white',
                                            fontWeight: '500',
                                            cursor: 'pointer'
                                        }}>{category.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div style={{
                    backgroundColor: 'olive',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '10px',
                    padding: '10px'
                }}>
                    {
                        products.map((product, index) => (
                            <Card key={index} data={product} functionToOpenModal={() => { onOpenModal(index) }} />
                        ))
                    }
                </div>
            </div>
            <div style={{
                padding: '20px',
                margin: '40px 0'
            }}>
                <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>

            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
            </Modal>
        </>
    )
}

export default Home;