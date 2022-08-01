import React, { useState } from 'react'
import productsData from './products.json'
import Navbar from './Navbar'
import { useNavigate, Link } from 'react-router-dom'

import '../App.css'
function Dummyproduct() {
    let history = useNavigate();
    function logoutto() {
        history("/")
    }
   
    // console.log(productsData);
    let [data, setData] = useState(productsData.products);
    const [value,setValue]=useState('')
    const onChange=(event)=>{
        setValue(event.tartget.value)
        
    }
    const onSearch=(searchTerm)=>{
        console.log('search',searchTerm)
    }


    const handlePrice = () => {
        const sortedData = [...data.sort((a, b) => a.price - b.price)];
        setData(sortedData);
    }
    const handlePricehl = () => {
        const sortedData = [...data.sort((g, h) => h.price - g.price)];
        setData(sortedData);
    }
    const handleRating = () => {
        const sortedData = [...data.sort((c, d) => c.rating - d.rating)];
        setData(sortedData);
    }
    const handleRatingm = () => {
        const sortedData = [...data.sort((i, j) => j.rating - i.rating)];
        setData(sortedData);
    }
    const handleDiscount = () => {
        const sortedData = [...data.sort((e, f) => f.discountPercentage - e.discountPercentage)];
        setData(sortedData);
    }
    const allpro= () => {
        const sortedData = [...data.sort((y, z) => y.id - z.id)];
        setData(sortedData);
    }
    
    


    return (
        <>
        <Navbar />
            <h1>Products Page</h1>
            <div>
                <label>Search  : </label>
                <input className='searchh' type='text' placeholder='search here by title name ....'  value={value} onChange={onChange} ></input>
                <button onClick={()=>onSearch(value)}>Search</button>
            </div>
            
            <button onClick={handlePrice}>Sort by price Low to High</button>
            
            
            <button onClick={handlePricehl}>Sort by price High to Low</button>
            <div>
            <button onClick={handleRatingm}>Sort by More Rating</button>
            <button onClick={handleRating}>Sort by Less Rating</button>
            </div>
            <button onClick={handleDiscount}>Sort by more Discount</button>
            <div><button onClick={allpro} className='l'>All Products</button></div>
            <div><button onClick={logoutto} className='logg'>Logout</button></div>
            {/* <div className='herecart'>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>1</span>
            </div> */}


            <div className='grmn'>
                {data.map(product => {
                    return (
                        <div className='allpro' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} width="460px" height="180px" alt='product image is here' />
                            </Link>
                            <h3>{product.title}</h3>
                            <h3 className='b'>{product.brand}</h3>
                            <h3>Price: Rs-{product.price} &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Discount % ={product.discountPercentage}</h3>
                            <p className='blink'>Product Left in stock : {product.stock}</p>
                            <h3 className='b'>Rating: {product.rating}</h3>
                            <Link to={`/products/${product.id}`}><button className='bot' >View Details of Product</button></Link>
                            <button className='bott' >Add to cart</button>
                        </div>
                    )
                }
                )}
            </div>





        </>
    )
}


export default Dummyproduct