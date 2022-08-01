import React from 'react';

const Addresspage=({total,cart})=>{
    function orderr(){
        alert('Your Order is placed Successfuly ')
    }
    return(
        <>
        <div className='topp'>
                <div className='firstt' >
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
        <h2>Your Order summary &nbsp;&nbsp;&nbsp; for {cart.length}&nbsp;items &nbsp;&nbsp;&nbsp; is RS--{total}
        </h2>
        <textarea placeholder='Enter your delivery address here....'></textarea>
        <button onClick={orderr} className='lobtn'>Place Order </button>
        
        </>
    )
}
export default Addresspage