
import React from 'react'
import { useState ,useEffect} from 'react'
import '../App.css'

function Backtotopbutton() {
    const [backtotopbutton,setBacktotopbutton]=useState(false)
    useEffect(() => {
      window.addEventListener('scroll',()=>{
        if(window.scrollY > 100){
          setBacktotopbutton(true)
      } else {
          setBacktotopbutton(false)
      }
      })
        
        
    }, [])
    const scrollUp=()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  return (
    <div>
      {backtotopbutton && (
        <button className='too' onClick={scrollUp}> <i class="fas fa-arrow-up"></i></button>
      )}
    </div>
  )
}

export default Backtotopbutton