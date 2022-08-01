import React from 'react'

import productsData from './products.json'

import  {useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom'
import '../App.css'
import { useParams } from 'react-router-dom';


function ProductDetail() {

  const navigate = useNavigate();
  const {productId} = useParams()
  const [search,setSearch]=useState('')
  const thisProduct = productsData.products.find(prod => prod.id === Number(productId))
  console.log(productId)
  let [countNum, setCount] = useState(0);
  let increaseValue = () => {if (countNum === 12) {
    alert("you cannot add more than 12 items");
    } else{
      setCount(countNum += 1)
    }
    
  
  } 
  let decreaseValue = () => {
    if (countNum === 0) {
      alert("Add atleast one item");
      } else {
      setCount(countNum -= 1); 
      }
  
  }
  let resetValue = () => {
    setCount(0)
  
  };
  return(
    <div className='sgjv'>
      <div className="leftdiv">
        <div className="firstup">
        <div className="yummy"><img src={thisProduct.images[0]} alt='first ' height="435px" width="450px"/></div>
        <div  className="yummy"><img src={thisProduct.images[1]} alt='first 'height="435px"  width="450px" /></div>
        
        </div>
        <div>
          <div className="secondup">
          <div  className="yummy"><img src={thisProduct.images[2]} alt='first ' height="435px" width="450px"/></div>
          <div  className="yummy"><img src={thisProduct.images[3]} alt='first'  height="435px" width="450px"/></div>
          </div>
       
        </div>
        

      </div>
      <div className="rightdiv">
        <div className="topdiv">
          <div><h1>See Details</h1></div>
          <div><h2>Brand -- {thisProduct.brand}</h2></div>
          <div><h3>{thisProduct.title}</h3></div>
          <div><h3>Rating {thisProduct.rating}<span class="fa fa-star checked"></span>(5)</h3></div>
          <div><p className='blinkk'> Flash Sale  &nbsp;&nbsp; &#9889; &nbsp;&nbsp;&nbsp;Only for You</p></div>
          <div><h3>Rs {thisProduct.price}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discount : {thisProduct.discountPercentage} %</h3></div>
          <div><h4>Inclusive of all taxes</h4></div>
          {/*  */}
          <div>
            <h1></h1>
            {(thisProduct.category === 'tops' || thisProduct.category === 'womens-dresses' || thisProduct.category === 'womens-shoes' || thisProduct.category === 'mens-shirts' || thisProduct.category === 'mens-shoes' )   &&  <div><div><h3>Select the Size</h3></div>
          <div>  <span class="dot">S</span>&nbsp;&nbsp;&nbsp;
  <span class="dot">M</span>&nbsp;&nbsp;&nbsp;
  <span class="dot">L</span>&nbsp;&nbsp;&nbsp;
  <span class="dot">XL</span>&nbsp;&nbsp;&nbsp;
  <span class="dot">XXL</span></div></div>
       
      }
          </div>
          <div><h2>About Product :</h2></div>
          <div><h3>{thisProduct.description}</h3></div>
          <div><p className='blink'>Product Left in stock : {thisProduct.stock} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Grab the offer &#128154;</p></div>
          <div>
            <h3> You have added  {countNum} items  of this product in cart </h3>
            <button id='addbut' onClick={increaseValue}>+</button>
            <button  id='subbut'  onClick={decreaseValue}>-</button>
            <button  id='res' onClick={resetValue}>Reset</button>
            </div>

        </div>
        
      </div>
      <div className="lastdiv">
      <button onClick={()=>navigate("/")}>Logout</button>
        
      </div>
    </div>

  )
}

export default ProductDetail