import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../App.css'
const Logincart=()=>{
    let history = useNavigate();
    function logpage(){
        history("/")
    }
    return (
        <>
        <h4 className='looo'>No Products in the cart please Login   <button onClick={logpage} className='lobtn'>Loginpage </button>and order products Avail 20%off on all products </h4></>
    )
}
export default Logincart