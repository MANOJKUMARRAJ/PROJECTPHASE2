import React from 'react'

import {useState,useEffect} from 'react'

import { useNavigate } from 'react-router-dom'
// import Products from './Products'
// import Lognavbar from './Lognavbar'
import '../App.css'


function Loginpage() {
    const initialValues={email:"",password:""}
    const [formpageValues,setFormpageValues]=useState(initialValues);
    const [formpageErrors,setFormpageErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    let history = useNavigate();
    function nextpage(){
        history("/products")
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
    {/* <Lognavbar /> */}
    <div className='toppp'>
                <div className='firstt' >
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
                <form onSubmit={handleSubmit}>
        
        <div><h1 className='hlo'>Login Page</h1></div>
          <div className='onew'>
          <label>Email :</label>
          <input type='email' name='email' placeholder='please enter your email' value={formpageValues.email} onChange={handleChange}/>
          
          </div>
          <p >{formpageErrors.email}</p>
          <div>
          <label>Password</label>
          <input type='password' name='password' placeholder='password here' value={formpageValues.password} onChange={handleChange}/>
          </div>
          <p >{formpageErrors.password}</p>
          <button >Login</button>
        
      </form>
            </div>
     
      
    </div>
  )
}

export default Loginpage