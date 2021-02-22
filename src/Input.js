import { useState } from 'react'

function Input(){
  const [output, setOutput] = useState('');
  const [print, setPrint] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
      setOutput(event.target.value)
      setPrint(false)
  }

  const handleOnClick=()=>{
    setPrint(true)
  }

  return(
    <form>
      <label>
      <input
          onChange={handleChange}
        />
      </label>
        {
          print?
          <h3>{output}</h3>
          :null
        }

      <button onClick={handleOnClick}>Button</button>
    </form>
  )
}
export{
  Input
}