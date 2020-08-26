// Importera React
import React from 'react';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

// const chatRoomData = {
//   name: "The Local Lounge",
//   messages: {
//     'dsadsdsadsa1': {
//       'message': 'Hej 1'
//     },
//     'dsadsdsadsa2': {
//       'message': 'Hej 2'
//     },
//     'dsadsdsadsa3': {
//       'message': 'Hej 3'
//     },
//     'dsadsdsadsa4': {
//       'message': 'Hej 4'
//     },
//     'dsadsdsadsa5': {
//       'message': 'Hej 5'
//     },
//     'dsadsdsads6': {
//       'message': 'Hej 6'
//     }
//   }
// }

function App() {
  const [counter, setCounter] = useState(0)
  const [chatRoomData, setChatRoomData] = useState({}) // Default värde sätts till förväntad typ

  function handleGetChatRoom() {
    console.log("1")
    const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
    fetch(url)
      .then((response) => {
        console.log("2")
        return response.json()
      })
      .then(data => {
        console.log("4")
        setChatRoomData(data)
      })
    console.log("3")
  }

  useEffect( () => {
    handleGetChatRoom()
  }, [])
  

  // useEffect(() => {
  //   // 1. Det här körs när komponenten initieras (komponents första önskan)
    
  //   // 2. return: Körs när komponenten försvinner från sidan (komponentens sista önskan)
  // }, [
  //   // 3. Ovan körs när dessa variabler ändras
  // ])

  function handleOnClick () {
    setCounter(counter + 1)
  }

  return (
    // JSX
    <div className="container">
      <h1 onClick={handleOnClick}>{chatRoomData.name} - {counter}</h1>
      
      <div className="row">
        <div className="col-md-12">
          <MessageForm handleOnSuccess={handleGetChatRoom} label="Enter your message" placeholder="Hej, ...."/>      
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Kolla så vi har chatRoomData.messages innan vi renderar MessageList */}
          {chatRoomData.messages ? 
            <MessageList messages={chatRoomData.messages}/> : 
            ""
            // Om vi inte har chatRoomData.message -> Rendera en tom sträng
          }
        </div>
      </div>
    </div>
  );
}

// Exportera
export default App;
