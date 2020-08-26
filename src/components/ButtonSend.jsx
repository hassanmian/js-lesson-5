import React from 'react'

export default function ButtonSend(props) {
    const { label } = props;
    return (
      <button className="btn btn-primary btn-block">{label}</button>
    )
}
