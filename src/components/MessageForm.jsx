import React from 'react'
import ButtonSend from './ButtonSend'

export default function MessageForm( { label, placeholder } ) {
    // Mer information om deconstructing: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    //const label = props.label
    //const {label} = props
    // const { label, placeholder } = props
  
    // const obj = {
    //   'a': 1,
    //   'b': 2,
    //   'c': 3,
    //   'd': 4,
    // }
    // const {b, c, a} = obj
    // console.log(a)
    // console.log(b)
    // console.log(c)
  
    return(
      <div>
        <label>{label}</label>
        <input type="text" placeholder={placeholder} />
        <ButtonSend label="Send" />
      </div>
    )
  }