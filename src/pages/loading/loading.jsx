import React,{useEffect, useState} from 'react'
import Loading from './loading.gif'
import '../Home.css'
const loading = ({show}) => {
    const[IsVisible,setIsVisible]=useState(true);
    useEffect(()=>{
        const timer = setTimeout(() => {
    setIsVisible(false);
    },5000);
    // setIsVisible(true);
    return () => {
    clearTimeout(timer);
    }
    },[])
  return (
    <div className='loading-screen'>
        {
              IsVisible?<img className='loading-img' src={Loading}/>:""
        }

    </div>
  )
}

export default loading