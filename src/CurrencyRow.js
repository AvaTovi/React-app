// if you type rfc it generates this beginning code
import React from 'react'

export default function CurrencyRow(props) {
const {
   currencyOptions,
   selectedCurrency,
   onChangeCurrency,
   onChangeAmount,
   amount
} = props = amount
return (
  <div>
    <input type="number" className="input" value={amount} onChange={onChangeAmount} />
   <select value={selectedCurrency} onChange={onChangeCurrency}>
      {currencyOptions.map(option => (
      <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
  )
}
