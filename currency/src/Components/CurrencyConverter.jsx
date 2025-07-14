import React from 'react';
import { useState ,useEffect} from 'react';
import {PulseLoader} from 'react-spinners'

 const CurrencyConverter = () => {
 const [state, setstate] = useState([]);
 const [from, setFrom] = useState('');
 const [to, setTo] = useState('');
 const [amount,setAmount]=useState()
 const [show, setShow] =useState()
 const [load, setLoad] =useState(false)
   const [error, setError] = useState('');


const  url='https://api.frankfurter.dev/v1/currencies';

const data=async () => {
      const response=await fetch(url)
      const result=await response.json()
      console.log(Object.keys(result));
      setstate(Object.keys(result))
      
  }
useEffect(() => {
  data()
  
}, []);



 function fromcurrency (e){
  setFrom(e.target.value)
  if (error && e.target.value !== to) {
      setError('');
    }
 }

 function tocurrency(e) {
  setTo(e.target.value)
  if (error && e.target.value !== from) {
      setError('');
    }
 }

function getamountvalue(e) {
  setAmount(e.target.value)
  setError('')
}

const convertcurrency= async (e) =>  {
   if (!amount) {
    setError('Please enter valid amount')
    return;
   }
   if (from===to) {
    setError('Please select different currencies');
   return;
   }
   setLoad(true)
   
   try {
   const response= await fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${from}&to=${to}`)
   const result= await response.json()
   console.log(result,'here data is');
   setShow('converted amount : '+ result.rates[to] + "  "  +  to )
  
   }  catch (error) {
    setError('Failed to convert currency')
   } finally {
    setLoad(false)
   }

  
}


    return (

        <div className='container'>
        <div className='select'>
           <div>
            <p>From</p>
            
                 <select onChange={fromcurrency} value={from}>
                 {
                  state.map((value,index)=>{
                    return(
                    <option value={value} key={index}>{value}</option>
                    )
                  })
                 }
                 </select>

            </div> 
           
              <div>
            <p>To</p>
            
            <select onChange={tocurrency} value={to}>
               {
                  state.map((value,index)=>{
                    return(
                    <option value={value} key={index}>{value}</option>
                    )
                  })
                 }
            </select>

            </div> 
        </div>

        <div className='amountcontainer'>
          <p>Amount :</p>
          <input type='number' placeholder='Enter Amount' onChange={getamountvalue}></input>
        </div>
       
  
         {error && <div className="error-message" style={{color: 'red', marginLeft:'35%', marginTop:'6px'}}>{error}</div>}

        
        
       <div className="convertbtn">
        <button onClick={convertcurrency}>convert currency</button>
       </div>
       
       {load? <PulseLoader color='blue' loading={load}/> :  <p>{show}</p>}

        </div>


    );
}

export default CurrencyConverter;

