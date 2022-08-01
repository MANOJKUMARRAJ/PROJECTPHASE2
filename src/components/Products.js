import React, { useState } from 'react'
import productsData from './products.json'
import Backtotopbutton from './Backtotopbutton'

import { useNavigate, Link } from 'react-router-dom'
import Navbartop from './Navbartop'

import '../App.css'
const Products = ({onAdd,cart,removcart}) =>  {
    let history = useNavigate();
    function logoutto() {
        history("/")
    }
   
    // console.log(productsData);
    let [data, setData] = useState(productsData.products);
    // const [cart, setCart] = useState([])


    // const [value,setValue]=useState('')
    // const onChange=(event)=>{
    //     setValue(event.tartget.value)
        
    // }
    // const onSearch=(searchTerm)=>{
    //     console.log('search',searchTerm)
    // }


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
    const handleStock = () => {
        const sortedData = [...data.sort((q, r) => q.stock - r.stock)];
        setData(sortedData);
    }
    const allpro= () => {
        const sortedData = [...data.sort((y, z) => y.id - z.id)];
        setData(sortedData);
    }
    // const handleClick=(product)=>{
      
    //     setCart([...cart,product])
    //     console.log(cart)

        
  
        
    //     // alert('added to cart')
     

    // }
      


    return (
        <div className='mama'>
            <Navbartop onAdd={onAdd} cart={cart}/>
        
            {/* <h1>Products Page</h1> */}
            {/* <div>
                <label>Search  : </label>
                <input className='searchh' type='text' placeholder='search here by title name ....'  value={value} onChange={onChange} ></input>
                <button onClick={()=>onSearch(value)}>Search</button>
            </div> */}
            
            <button onClick={handlePrice}>Sort by price Low to High</button>
            
            
            <button onClick={handlePricehl}>Sort by price High to Low</button>
            <div>
            <button onClick={handleRatingm}>Sort by More Rating</button>
            <button onClick={handleRating}>Sort by Less Rating</button>
            </div>
            <button onClick={handleDiscount}>Sort by more Discount</button>
            <button onClick={handleStock}>Sort by stock</button>
            
            <div><button onClick={allpro} className='l'>All Products</button></div>
            <div><button onClick={logoutto} className='logg'>Logout</button></div>
            {/* <div><h1>{cart.index}</h1></div>
            <div className='herecart'>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{cart.length}</span>
            </div> */}


            <div className='grmn'>
                {data.map(product => {
                    return (
                        <div className='allpro' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} width="460px" height="180px" alt='product is here' />
                            </Link>
                            <h3>{product.title}</h3>
                            <h3 className='b'>{product.brand}</h3>
                            <h3>Price: Rs-{product.price} &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Discount % ={product.discountPercentage}</h3>
                            <p className='blink'>Products Left in stock : {product.stock}</p>
                            <h3 className='b'>Rating: {product.rating}</h3>
                            <Link to={`/products/${product.id}`}><button className='bot' >View Details of Product</button></Link>
                            {/* <button className='bott' key={product.id}   onClick={()=>handleClick(product)}>Add to cart</button> */}
                            <button type='button' onClick={(e)=>{
                            e.preventDefault()
                            onAdd(product)}}>Add to Cart</button>
                        </div>
                    )
                }
                )}
            </div>
            <Backtotopbutton />





        </div>
    )
}


export default Products