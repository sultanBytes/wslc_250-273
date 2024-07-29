import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { myContext } from '../assests/ContextData';
import Header from './Header';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [dataToShow, setDataToShow] = useState([]);
    const [dataByPage, setDataByPage] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [allCats, setCats] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [userMax, setUserMax] = useState(1000);
    const [currentProduct, setCurrentProduct] = useState({});
    
    
    const onCloseModal = () => setOpen(false);


    const getData = async () => {
        // let url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;

        // if (activeCategory !== 'all') url = `https://dummyjson.com/products/category/${activeCategory}?limit=12&skip=${(currentPage - 1) * 12}`;

        let url = 'https://dummyjson.com/products?limit=194';

        if(activeCategory !== 'all') url = `https://dummyjson.com/products/category/${activeCategory}`
        axios.get(url)
            .then((response) => {
                if (response.status !== 200) return alert('something went wrong');

                
                setProducts(response.data.products)

                // console.log(response.data.products);

                let minPrice = Infinity;
                let maxPrice = -Infinity;
                response.data.products.forEach((product) => {
                    if (product.price < minPrice) {
                        minPrice = product.price;
                    }

                    if (product.price > maxPrice) {
                        maxPrice = product.price;
                    }
                })

                setMin(minPrice);
                setMax(maxPrice);
                setUserMax(maxPrice)
            })
    };




    useEffect(() => { getData() }, [activeCategory]);

    const filterDataByPrice = ()=>{
        const filteredData = products.filter((product)=> product.price <= userMax);
        setTotalPages(Math.ceil(filteredData.length / 12));

        setDataToShow(filteredData);
    }

    useEffect(()=>{
        filterDataByPrice();
    },[userMax, products]);

    useEffect(()=>{
        let start = (currentPage - 1) * 12;
        setDataByPage(dataToShow.slice(start,  start + 11));
    },[currentPage, activeCategory, userMax, dataToShow])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((response) => {
                if (response.status !== 200) return alert('something went wrong');
                setCats(response.data);
            })
    }, []);

    const onOpenModal = (index) => {
        console.log(dataByPage[index]);
        setCurrentProduct(dataByPage[index]);
        setOpen(true);
    }

    const showToast = ()=>{
        toast('Product added to cart');
    }


    return (
        <>
            <Header/>
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
                        }}>Maximum price</h3>
                        <div>
                            <input type='range' max={max} min={min} value={userMax} onChange={(e)=>{setUserMax(e.target.value); setCurrentPage(1)}}/>
                            <div>
                                <spna>Maximum price : {userMax}</spna>
                            </div>
                        </div>
                        <h3 style={{
                            lineHeight: '16px'
                        }}>Category</h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: '0'
                        }}>
                            <li key={-1}
                                onClick={() => { setActiveCategory('all'); setCurrentPage(1) }}
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
                                        onClick={() => { setActiveCategory(category.slug); setCurrentPage(1) }}
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
                        dataByPage.map((product, index) => (
                            <Card toastFn={showToast} key={index} data={product} functionToOpenModal={() => { onOpenModal(index) }} />
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
                <h2>{currentProduct.title}</h2>
            </Modal>

            <ToastContainer />
        </>
    )
}

export default Home;