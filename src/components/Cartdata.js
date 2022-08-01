import React from 'react';
import '../App.css'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
const Cartdata = ({ cart, total ,removcart}) => {
    let history = useNavigate()
    const productspa = () => {
        history('/products')

    }
    const loginpa = () => {
        history('/')

    }
    const addresspa = () => {
        history('/addresspage')

    }
    const lopp=()=>{
        history("/")
    }
    
    if(cart.length === 0){
        return (
            <>
            <div className='topp'>
                <div className='firstt' onClick={loginpa}>
                    <a>Products </a>
                </div>
                <div className='secondd'>
                    <div className='herecartt'>
                        <span>
                            <i className='fas fa-cart-plus'></i>
                        </span>
                        <span>0</span>

                    </div>
                </div>
            </div>
            <div>
                <p>No products in the cart......   &nbsp;&nbsp;&nbsp;&nbsp; Add some products <button onClick={productspa}>Click here to Products Page</button></p>
                


            </div>
            </>
        )
    }

    return (
        < div className='omy'>
            <div className='topp'>
                <div className='firstt' onClick={lopp}>
                    <a>Products </a>
                </div>
                <div className='secondd'>
                    <div className='herecartt'>
                        <span>
                            <i className='fas fa-cart-plus'></i>
                        </span>
                        <span>{cart.length}</span>

                    </div>
                </div>
            </div>
            <h3>Total Price of products : Rs.{total}</h3>
            <button onClick={addresspa} className='lobtn'>Proceed to Checkout </button>
            <div>
                <button onClick={productspa}>Back to Products Page</button>
            </div>
            <h1 className='hdd'>Your cart items Here</h1>
            {/* <div class="heading cf">
    <h1>My Cart</h1>
    <a href="#" class="continue">Continue Shopping</a>
  </div> */}
            <div className='header'>
                <h3 className='heading'>Shopping Cart</h3>
                <h5 className='action' onClick={removcart}>Remove All</h5>

            </div>
            <div>
                {
                    cart.map((product)=>{
                        return (
                            <div>
                                <div className='fgc' key={product.id}>
                                {/* <div className='mainn'>
                                    <div className='imggd'><img src={product.thumbnail} alt='fgxdh' height='125px' width='125px'/></div>

                                </div> */}
                                <div className='cartitems'>
                                    <div className='imggbox'>
                                    <img src={product.thumbnail} alt='fgxdh'  height='120px'/>

                                    </div>
                                    <div className='about'>
                                        <h1 className='tit'>{product.title}</h1>
                                        <h3 className='subtitle'>{product.brand} &nbsp;&nbsp;&nbsp; Rs:{product.price}</h3>
                                        <img src='https://thumbs.dreamstime.com/b/trademark-business-rubber-vector-stamp-81743387.jpg' height='38px' alt='trademark'/>
                                    </div>
                                    
                                    <div className='counterrr'>
                                        <div className='bt'>+</div>
                                        
                                        <div className='bt'>-</div>
                                    </div>
                                    
                                    <div className='pricess'>
                                    <div className='countt'>quantity : {product.quantity}</div>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Cartdata