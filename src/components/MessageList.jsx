import React from 'react'
import MessageItem from './MessageItem'

export default function MessageList({ messages }) {
  // console.log(messages)
  const messageArray = Object.entries(messages)

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

  // const myArray = ['Elin', 'Patric', 'Amin', 'Ana', 'Andreas', 'Angie']
  // console.log(myArray)
  // const newArray = myArray.map(item => {
  //   return item+'1'
  // })
  // console.log(newArray)
  // const ages = [15, 12, 34, 13, 54, 64, 32]
  // const birthdayTime = ages.map(age => {
  //   if(age < 18){
  //     return age
  //   } else {
  //     return null
  //   }
  // })
  // console.log(birthdayTime)

  // const underAge = ages.filter(item => {
  //   return item < 18
  // })
  // console.log(underAge)

  return (
      <ul className="list-group">
        {messageArray.map(item => {
          const key = item[0]
          const messageData = item[1]
          const message = messageData.message
          return <MessageItem key={key} message={message} />
          // Kan skrivas som nedan:
          // return <MessageItem key={item[0]} message={item[1].message} />

        })}
      </ul>
    )
  }