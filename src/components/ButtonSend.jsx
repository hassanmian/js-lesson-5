import React from 'react'

export default function ButtonSend(props) {
    const { label, handleOnClick } = props;
    // Ta emot prop från parent

    return (
        <button 
            // Trigga prop-funktionen när någon trycker på knappen
            onClick={handleOnClick} 
            className="btn btn-primary btn-block"
        >   
            {label}
        </button>
    )
}
