import React from 'react'
import Myform from './myform'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './new.css'


const mycard =()=>{

    const { handlechange , handlesubmit , handlefocus ,data , error }=Myform()
  console.log('myerror is',error)
    
    // const b='alert-secondary'
    return(
<div>
        <div className='credit-card '>
            <Cards name={data.name} number={data.number.slice(0,16)} cvc={data.cvc.slice(0,3)} focused={data.focus} expiry={data.expiry.slice(0,5)} />

        </div>
        <div className='container shadow-lg p-3 m-2  rounded '>
      
        
        <div className='form ' >
        <form onSubmit={handlesubmit}>
  <div className="form-row ">
    <div class="form-group col-md-10">
      <label for="inputEmail4"><p className='h2 text-dark' >Card Number</p></label>
      {error.cnum?<i className="far fa-check-circle"></i>:''}
      <input type="number" name ='number'  value={data.number.slice(0,16)} onChange={handlechange} onFocus={handlefocus} 
       className="form-control" isValid={error.cnum} placeholder="Number" required /> 
    </div>
    <div className="form-group col-md-10">
      <label for="inputPassword4"><p className='h2 mt-2 text-dark' aria-required>Card Name</p></label>
      {error.cname?<i className="far fa-check-circle"></i>:''}
      <input type="text" value={data.name} onChange={handlechange} name='name'
       onFocus={handlefocus} isValid={error.cname} class="form-control" placeholder="Name" />
    </div>
  </div> 

  <div className="form-row d-flex flex-row ">
    <div className="form-group col-md-4 ">
      <label for="inputCity"><p className='h2 mt-2 text-dark' aria-required>Last Date</p></label>
      {error.cexp?<i className="far fa-check-circle"></i>:''}
      <input type="text" value={data.expiry.slice(0,5)} onChange={handlechange} onFocus={handlefocus} 
      name='expiry' isValid={error.cexp} className="form-control" placeholder="mm/yy" min="1" max="31" required/>
      


    </div>
   

    <div className="form-group col-md-2 down">
      <label for="inputZip"><p className='h2 mt-2 text-dark'  aria-required>CVV</p></label>
      {error.ccvv?<i className="far fa-check-circle"></i>:''}
      <input type="number" value={data.cvc.slice(0,3)} onChange={handlechange} onFocus={handlefocus} name='cvc'
       className="form-control" isValid={error.ccvv}  placeholder="cvv" required/>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary ">Confirm</button>
</form>
</div>

<div>
  {error.show&&error.message?
<div className='alert alert-success'  role="alert">
  {error.message}
</div>:error.message?<div className='alert alert-warning' >{error.message}</div>:''}
</div>


        </div>
       
        </div>
        
    )
}

export default mycard;