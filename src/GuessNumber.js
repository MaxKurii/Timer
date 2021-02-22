import { useState } from 'react'

function GuessNumber(){
  const [value, setValue]=useState('');
  const [print, setPrint]=useState('');

  const handleOnChange=(e)=>{
    e.preventDefault();
    setValue(e.target.value)
    setPrint(false)
    
  }

  const handleOnClick=()=>{
    
    if(value===5){
      alert('super')
    }
    // setPrint(true)
  }

  return(
    <div>
      <input
        onChange={handleOnChange}
      />
      <button 
        onClick={handleOnClick}
        >
          Button
      </button>
      {
        print?
        <h3>{value}</h3>
        :null
      }
    </div>
  )
}
export{
  GuessNumber
}