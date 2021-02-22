import { useEffect, useState } from "react";
function Button(){
  const [click, setClick]= useState(0);

  useEffect(()=>{
    document.title = `Вы нажали ${click} раз`;
  })

  const handleOnClick = () => {
    setClick(click + 1)
  }

  return(
    <div>
      <p>Вы нажали {click} раз </p>
      <button onClick={handleOnClick}>Click</button>
    </div>
  )
}
export {
  Button
}