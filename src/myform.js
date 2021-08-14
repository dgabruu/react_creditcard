import React, { useState } from 'react';
import Formerror from './formerror'

const Myform=()=>{
    const [data , setdata]=useState({
        name:'',
        number:'',
        expiry:'',
        cvc:'',
        focus:''
    })
    
    
    const [error , seterror]= useState({})

    const handlefocus=e=>{
        setdata({
            ...data,
            focus:e.target.name
        })
       
      
    }

    

    const handlechange=e=>{
        const {name , value}=e.target;
         setdata({
            ...data,
            [name]:value,
           
           
        })
        
    }

    const handlechanges=e=>{
        const {name , value}=e.target;
         setdata({
            ...data,
            [name]:value,
           
           
        })
        if(data.month!=='')
        {
            setdata({
                ...data,
                expiry:`${data.month}/${data.year}`
            })
        }

        if(data.year!=='')
        {
            setdata({
                ...data,
                expiry:`${data.month}/${data.year}`
            })
        }
        if(data.month!==''&&data.year!=='')
        {
            setdata({
                ...data,
                expiry:`${data.month}/${data.year}`
            })
        }
        
    }

    

    const handlesubmit=e=>{
        e.preventDefault()
        seterror(Formerror(data))
        
    }
    

    return { handlechange,handlefocus,handlesubmit,handlechanges,data,error}
}

export default Myform;