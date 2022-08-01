import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const Navbartop = ({onAdd,cart}) => {
    let history=useNavigate()
    const cartpa=()=>{
        
        history('/cartdata')

    }
    const lopp=()=>{
        history("/")
    }
    return (
        <div className='topp'>
            <div className='firstt' onClick={lopp}>
                <a>Products </a>
            </div>
            <div className='secondd' onClick={cartpa}>
                <div className='herecartt'>
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span>
                    <span>{cart.length}</span>

                </div>
            </div>
        </div>
    )
}
export default Navbartop