import React from 'react'

function ErrorBox(props) {
    return (
        <div className="error">
            <p>{props.text}</p>
            <i className="close_error"></i>
            
        </div>
    )
}

export default ErrorBox
