import React from 'react';

const CurrencyConverter = () => {
    return (

        <div class='container'>
        <div class='select'>
           <div>
            <p>From</p>
            <select>
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
            </select>
            </div> 
           
              <div>
            <p>To</p>
            <select>
           <option>1</option>                                                                    
           <option>2</option>
           <option>3</option>
           <option>4</option>
            </select>
            </div> 
        </div>

        <div class='amountcontainer'>
          <p>Amount :</p>
          <input type='text' placeholder='Enter Amount'></input>
        </div>

       <div class="convertbtn">
        <button>convert currency</button>
       </div>
        </div>

    );
}

export default CurrencyConverter;
