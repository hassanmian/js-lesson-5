import React from 'react'
import { useRef } from 'react'
import ButtonSend from './ButtonSend'

export default function MessageForm( { label, placeholder, handleOnSuccess } ) {
    const messageInputField = useRef()
    // Vi skapar en variabel som hjälper oss att referera till input-fältet

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
    function handleOnClick() {
        // console.log("Användaren har klickat på knappen")
        // console.log("Hämta det användaren har skrivit in i input fältet")
        // console.log(messageInputField.current.value)
        const message = messageInputField.current.value
        const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
        const data = {
            message: message
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
            console.log("Data har skickats")
            handleOnSuccess()
            messageInputField.current.value = ""
        })
        // HTTP STATUS CODE
        // https://www.restapitutorial.com/httpstatuscodes.html

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
        // GET - Hämta data
        // POST - Skapa data
        // PUT - Förändra hela objektet
        // DELETE - Ta bort objektet
        // PATCH - Förändra del av objektet
    }
    // Skriv funktionen som ska anropas
    return(
      <div className="form-group">
        <label>{label}</label>
        {/* Ange ref-variablen så att vi kan referera till just det här input fältet */}
        <input ref={messageInputField} type="text" className="form-control" placeholder={placeholder} />
        {/* Skicka ner funktionen som prop */}
        <ButtonSend handleOnClick={handleOnClick} label="Send" />
      </div>
    )
  }

//   MyCoolComponent -> Title Case (Capital Camel Case)
//   myCoolComponent -> Camel Case
//   my_cool_component -> Snake Case
//   my-cool-component -> Kebab Case
//   mycoolcomponent -> Flat Case
//   MY_COOL_COMPONENT -> Upper Case