import React from 'react'

import {useState,useEffect} from 'react'

import { useNavigate } from 'react-router-dom'
// import Products from './Products'
// import Lognavbar from './Lognavbar'
import '../App.css'


function Loginpage({cart}) {
    const initialValues={email:"",password:""}
    const [formpageValues,setFormpageValues]=useState(initialValues);
    const [formpageErrors,setFormpageErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    let history = useNavigate();
    function nextpage(){
        history("/products")
    }
    function lopp(){
      history("/")
  }
  function nodatapa(){
    history("/logincart")
}
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormpageValues({ ...formpageValues,[name]:value});
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      setFormpageErrors(validate(formpageValues));
      setisSubmit(true);
      if (Object.keys(formpageErrors).length === 0 && isSubmit){
        nextpage()
      }
    };
    useEffect(()=>{
      console.log(formpageErrors);
      if (Object.keys(formpageErrors).length === 0 && isSubmit){
        console.log(formpageErrors)
      }
    })
    const validate=(values)=>{
      const errors={};
      const regex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      if(!values.email){
        errors.email="valid email is required";
      } else if(!regex.test(values.email)){
        errors.email="This is not a valid email format";
      }
      if(!values.password){
        errors.password="valid password is required";
      } else if (values.password.length<8){
        errors.password="password must be more than 8 characters"
      }
      return errors;
    }
  return (
    <div className='mainlogin'>
    <div className='firslo'>
    <div className='fur' onClick={lopp} >
                    <a>Products </a>
                </div>
                <div className='sec'>
                    <div className='herecar' onClick={nodatapa}>
                        <span>
                            <i className='fas fa-cart-plus'></i>
                        </span>
                        <span>0</span>

                    </div>
                </div>
    </div>
    <div className='secondlo'>
    <form onSubmit={handleSubmit}>
        
        <div><h1 className='hlo'>Login Page</h1></div>
          <div className='onew'>
          <label>Email :</label>
          <input type='email' name='email' placeholder='please enter your email' value={formpageValues.email} onChange={handleChange}/>
          
          </div>
          <p  className='erp'>{formpageErrors.email}</p>
          <div className='onew'>
          <label>Password</label>
          <input type='password' name='password' placeholder='password here' value={formpageValues.password} onChange={handleChange}/>
          </div>
          <p className='erp' >{formpageErrors.password}</p>
          <button className='bter'>Login</button>
        
      </form>
    </div>
 
      
    </div>
  )
}

export default Loginpage