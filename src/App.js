// Importera React
import React from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

function App() {
  return (
    // JSX
    <div>
      <h1>ChatRoom</h1>
      <MessageForm label="Enter your message" placeholder="Hej, ...."/>      
      {/* Precis som att skriva { MessageForm() }*/}
      <MessageList />
    </div>
  );
}

// Exportera
export default App;
