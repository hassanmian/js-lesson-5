import React from 'react'
import MessageItem from './MessageItem'

export default function MessageList() {
    return (
      <div>
        <MessageItem message="Hej" />
        <MessageItem message="Hallå" />
        <MessageItem message="Hi" />
        <MessageItem message="Hola" />
      </div>
    )
  }