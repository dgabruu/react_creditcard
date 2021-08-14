import {useState} from 'react'
import Myform from './myform'
import './new.css'

const Rend=()=>{

    const { handlechange , handlesubmit , handlefocus ,data , error }=Myform()
    return(
        <div className='container shadow-lg p-3 m-2 bg-white rounded '>
      
        
        <div className='form ' >
        <form onSubmit={handlesubmit}>
  <div className="form-row ">
    <div class="form-group col-md-10">
      <label for="inputEmail4"><p className='h2 text-dark' >Card Number</p></label>
      <input type="number" name ='number'  value={data.number.slice(0,16)} onChange={handlechange} onFocus={handlefocus} 
       className="form-control" isValid={error.cnum}  placeholder="Number" required /> 
    </div>
    <div className="form-group col-md-10">
      <label for="inputPassword4"><p className='h2 mt-2 text-dark' aria-required>Card Name</p></label>
      <input type="text" value={data.name} onChange={handlechange} name='name'
       onFocus={handlefocus} isValid={error.cname}  class="form-control" placeholder="Name" />
    </div>
  </div> 

  <div className="form-row d-flex flex-row ">
    <div className="form-group col-md-4 ">
      <label for="inputCity"><p className='h2 mt-2 text-dark' aria-required>Expiry</p></label>
      <input type="text" value={data.expiry.slice(0,5)} onChange={handlechange} onFocus={handlefocus} 
      name='expiry' isValid={error.cexp} className="form-control" placeholder="mm/yy" min="1" max="31" required/>
      


    </div>
   

    <div className="form-group col-md-2 down">
      <label for="inputZip"><p className='h2 mt-2 text-dark'  aria-required>CVV</p></label>
      <input type="number" value={data.cvc.slice(0,3)} onChange={handlechange} onFocus={handlefocus} name='cvc'
       className="form-control" isValid={error.ccvv}  placeholder="cvv" required/>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary ">Confirm</button>
</form>
</div>

<div className='alert alert-secondary'  role="alert">
  This is a secondary alert—check it out!
</div>

        </div>
    )

}

export default Rend;