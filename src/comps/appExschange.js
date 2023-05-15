import React from 'react'
import { useState } from "react";
 import { useRef } from "react";
function AppExschange() {
  let selectorCoin = useRef();
  let coinNumber= useRef();
  let [sumValueCoin, setSumValueCoin] = useState(0);

  const calcValueCion = () => {
    let tmp = Math.floor(selectorCoin.current.value)
    setSumValueCoin(coinNumber.current.value * tmp .toFixed(2))
  }
  return (
    <div>
      <h2>Enter the coin you want </h2>
      <select onChange={calcValueCion} className='form-select' ref={selectorCoin}>
        <option value="3">Use</option>
        <option value="5">Bath</option>
        <option value="6">erou</option>
      </select>
      <input onChange={calcValueCion} ref={coinNumber } type='number' className='form-control' />
      <p className='mt-4' style={{ border: "solid" }}>{sumValueCoin}</p>
    </div>
  )
}

export default AppExschange

